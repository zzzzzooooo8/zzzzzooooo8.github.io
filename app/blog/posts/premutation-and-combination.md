---
date: 2026-02-04
tags: 排列
category: 算法/排序算法
title: 排列算法
description: 本文深入拆解 itertools 排列组合函数与递归回溯的底层逻辑，并系统梳理 C++ 字符串转换与处理的高频技巧。
---
![2024A1](/2024A-1.png)
![2024A-2](/2024A-2.png)

**py版** ：有现成函数
```python
//对数组中的元素进行全排列/组合
from itertools import permutations 
from itertools import conbanations

data = [1, 2, 3]
result = list(permutations(data, 2))     //取两个进行排列（第二个参数决定选几个），返回生成的排列list
result = list(conbanations(data, 2))     //取两个进行组合（第二个参数决定选几个），返回生成的组合list

result = list(permutations(n, 2))        //从0-(n-1)选两个数进行排列，组合亦然
```
![[Pasted image 20260130222415.png]]
```python
//求排列数/组合数
import math

//排列数(facterial阶乘)
result = facterial(n)/facterial(n-k)
//组合数
result = facterial(n)/facterial(n-k)*facterial(k)
```
**代码（Python）**：
```python
from itertools import permutations
n = int(input())
dic = {}
for i in range(n):
    dic[i] = input().split()
perm = permutations(dic.keys(), n)
maxx = 0
for p in perm:
    ans = 0
    for i in p:
        a = dic[i]
        if a[0] =="&":
            ans = (ans&int(a[1]))+int(a[2])
        if a[0] =="|":
            ans = (ans|int(a[1]))+int(a[2])
        if a[0] =="^":
            ans = (ans^int(a[1]))+int(a[2])
    if ans > maxx:
        maxx = ans
print(maxx)
```

**c++版**：
1. 排列——DFS
思路：
- 看做在排列每个位置上尝试能不能放这个数（遍历所有数尝试将每个数放在这个位置试试），若这个数被用过了就不能放，反之则可以。
- 如果这个位置挑到了就找下一个位置的数应该是啥（进入新一轮DFS）。
- 检测返回的条件是排列的长度已经足够，就将这个排列塞入答案数组。
```cpp
string perm = "";
int a[10] = {0};
string perm_ans[10];
string ans = "" ;

void dfs(int n){
    if (perm.length() == n){        //返回条件
        ans.append(perm);
    }
    for(int i = 0; i < n; i++){     //为每个位置遍历所有可以的数
        if (a[i] == 0){             //为0表示没用过，可以选
            perm += to_string(i);   //将此数加入这个位置
            a[i] = 1;               //并将其标记改为1，意味用过
            dfs(n);                 //找到了这个位置的数就进入新一轮dfs
            perm.pop_back();        //将这个位置上原本的数扔出去，尝试放入别的数
            a[i] = 0;               //既然不在位置上了标记恢复为0
        }
    }
}
```
2. 组合
3. c++中的字符串处理
- 读入`[[a, b, c], [d, e, f], [g, h, i]]`型数据——二位数组，双重循环
- 将字符串中的数字字符变成对应字符
`stoi`_（最好不用`atoi`都用`stoi`， 因为前者只能处理字符，若传入字符串不会报错而是返回0；后者字符、字符串都能处理。）_
```cpp
#include <string>
s = "12"
num = stoi(s)      //num = 12
```

`个位数字字符 - '0'`：相当于49-48 。_(只能用于个位数，若要用于多位数需一位一位处理)_
```python
//个位数处理
s = '9'
num = s-'0         //num = 9

//多位数处理
s = '12'
num = (s[0]-'0')*10 + (s[1]-'0')
```

- 将数字转为数字字符——`to_string`
```cpp
#include <string>
num = 12
s = to_string(num)
```

- 查找字符串中某个子串的位置——`find(子串, 从哪个位置开始)`（返回第一次出现此字符的位置，若不存在返回**特殊常量npos！判断查到没有不能跟任何常数比只能跟npos比**。
- 删除字符串中指定位置的字符——`erase(开始位置的下标， 删几个）`。不加第二个参数默认从开始位置全删。
- 删除字符串中指定字符——`erase(s, 指定字符）`。erase操作较昂贵，相当于数组的移动。
- 在字符串最后加字符——`append(a)/s+"字符"
- 在字符串指定位置加字符——`insert(在哪个下标插，插几个，插谁)`。同样操作较昂贵。