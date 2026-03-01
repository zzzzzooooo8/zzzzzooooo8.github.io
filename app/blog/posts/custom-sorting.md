---
date: 2026-02-04
tags: 自定义排序
category: 算法/排序算法
title: 自定义排序算法
description: 硬核对比 Python 与 C++ 多重自定义排序：Python 巧用 key 元组优先级，C++ 凭结构体与 cmp 精准控场。助你快速掌握逻辑嵌套，优雅搞定高维排序难题。
---
![2025B](/2025B.png)

```
Input1:
4
alice 2 A K
bob 2 Q 10
carol A K Q
dave J 10 9

Output1:
alice
bob
carol
dave

Input2:
5
eve 3 5 7
frank Q Q 3
grace Q 3 Q
heidi K 10 9
ivan J J J

Output2:
ivan
frank
grace
heidi
eve

Input3:
8
a 4 5 7
b Q Q 3
c K 3 K
d Q Q 3
f K K K
g J J J
h Q Q 2
g 3 5 7

Output3:
f
g
c
h
b
d
a
g

```

**思路**：多重自定义排序，首先按相同元素的个数排，再按相同个数元素的大小排，最后按名字排。

**多重自定义排序（Python）**：`a.sort(key=cmp)`我们的工作就是要定义这个`cmp`函数。
- `cmp`函数传入一次参数（p)，我们将会对这个参数做操作；`return(条件一,条件二,条件三)`。之后sort就会按照这三个条件的从小到大依次排序。
- 条件一：用一个`dic`统计每张牌的个数。若`dic`中key的个数是1则为豹子、key个数问为2则为对子、key个数问为1则为散牌。所以条件一为`len(dic.keys())`。
- 条件二：比较相同牌的大小，因为又涉及到多重排序，所以这里用一个`x[]`数组来实现多重排序 _(数组本身就遵循先按元组中的第一个再按第二个...的多重排序)_。若同为豹子牌则直接将`dic.keys()[0]`塞入数组；若为对子牌则先找到对子牌（`dic值为2`）将其塞入x，再将散牌塞入x；若为散牌则将p进行sort后再塞入x。所以条件二为`x`。
！！！又因为`x`会按从小到大排序，所以我们要将插入x的数前面加负号  _(eg:`-dic.keys()[0]`)_。
- 条件三：为`name`。

**代码**(python)：
```python
n = int(input())
a = []
for i in range(n):                           //根据扑克牌规则将JQKA2依次变成越来越大的数字
    a.append(input().split())
    for j in range(1, 4):
        if a[i][j] == "J":
            a[i][j] = "11"
        if a[i][j] == "Q":
            a[i][j] = "12"
        if a[i][j] == "K":
            a[i][j] = "13"
        if a[i][j] == "A":
            a[i][j] = "14"
        if a[i][j] == "2":
            a[i][j] = "15"
        a[i][j] = int(a[i][j])

def cmp(p):                                    //p形如[名字，牌1，牌2，牌3]
    dic1 = {}
    for i in range(1,4):                       //统计每张牌个数
        dic1[p[i]] = dic1.get(p[i], 0) + 1
    if len(dic1.keys()) == 1:                  //若为豹子
        x = -dic1.keys()[0]
    elif len(dic1.keys()) == 2:                //若为对子
        x = []
        for i in dic1.keys():
            if dic1[i] == 2:  //找到对子牌加入x再在dic.keys()中pop出去，这样就只剩散牌在dic.keys()
                x.append(-i)
                dic1.pop(i)
                break
        x.append(-dic1.keys()[0])              //在x中加入散牌
    else:
        x = list(map(lambda t: -t ,sorted(p[1:], reverse=True)))
        
 //若为散牌，sorted(p[1:], reverse=True)意为将p[1:]从大到小排，并返回排好的数组；map(lambda t: -t ,某)将“某”全部取反。
    return (len(dic1.keys()), x, p[0])

a.sort(key=cmp)
for i in a:
	print(i[0])
```

**代码（c++版）：** 定义结构体和cmp比较函数
```cpp
#include <iostream>
#include <string>
#include <algorithm>
#include <map>
using namespace std;

struct Card_set{                         //定义结构体，便于自定义排序
    string name;                    
    int val[3];
    int ca;                              //记录共有几种牌
    int towice;                          //记录哪张牌出现了两次，便于对子排序
    int once;                            //记录哪张牌出现了一次，便于对子排序
};

int trans(string x){                     //将牌按规则都转换成数字类型
    if (x == "J") return 11;
    if (x == "Q") return 12;
    if (x == "K") return 13;
    if (x == "A") return 14;
    if (x == "2") return 15;
    return stoi(x);
}

// "<"升序排序，">"降序排序
bool cmp(Card_set x, Card_set y){                                 
    if(x.ca != y.ca) return x.ca < y.ca;                          //条件一
    if(x.ca == 1){                                                //豹子
        if (x.val[0] != y.val[0]) return x.val[0] > y.val[0];
        else return x.name < y.name;
    }
    if(x.ca == 2){                                                //对子
        if(x.towice != y.towice) return x.towice > y.towice;
        else if(x.once != y.once) return x.once > y.once;
        else return x.name < y.name;
    }
    if(x.ca == 3){                                                //散牌
        if(x.val[2] != y.val[2]) return x.val[2] > y.val[2];
        else if(x.val[1] != y.val[1]) return x.val[1] > y.val[1];
        else if(x.val[0] != y.val[0]) return x.val[0] > y.val[0];
        else return x.name < y.name;
    }
}

Card_set a[100010];

int main(){
    int n;
    cin >> n;
    for (int i = 0; i < n; i++){
        cin >>a[i].name;
        map<int, int> cnt;
        for (int j = 0; j < 3; j++){
            string s;
            cin >> s;
            a[i].val[j] = trans(s);
            cnt[a[i].val[j]]++;
        }
        a[i].ca = cnt.size();
        sort(a[i].val, a[i].val+3);
        for(int o = 0; o < 3; o++){
            if(cnt[a[i].val[o]] == 2) a[i].towice = a[i].val[o];
            if(cnt[a[i].val[o]] == 1) a[i].once = a[i].val[o];
        }
    }
    sort(a, a+n, cmp);
    for (int i = 0; i < n; i++){
        cout << a[i].name <<'\n';
    }
}
```