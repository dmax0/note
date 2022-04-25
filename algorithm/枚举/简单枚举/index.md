# 001简单枚举

采用暴力法枚举出所有可能情况，但大多时候进行一定的分析会让算法更简洁。

### Division

题目链接：[Division UVA-725](https://vjudge.net/problem/UVA-725)

#### 题目描述

Write a program that finds and displays all pairs of 5-digit numbers that between them use the digits 0 through 9 once each, such that the frist number divided by the second is equal to an integer N, where 2 $\le$ N $\le$ 79. That is ,
$$
\frac{abcde}{fghij} = N.
$$
where each letter represents a different digit. The first digit of one of the numereals is allowed to be zero.

#### Input

Each line of the input file consists of a valid integer `N`. An input of zero is to terminate the program.

#### Output

Your program have to display ALL qualifying pairs of numerals, sorted by increasing numerator(and, of course, denominator).

​	Your output should be in the following general form:

$xxxxx / xxxxx = N$

$xxxxx/xxxxx = N$

.

.

In case there are no pairs of numerals satisfying the condition, you must write ‘There are no solutions for N.’. Separate the output for two different values of N by a blank line. 

#### Sample Input 

```
61 62 0 
```

#### Sample Output

```
There are no solutions for 61.

79546 / 01283 = 62
94736 / 01528 = 62
```

#### 分析

枚举fghij,算出abcde,然后判断是否所有数字都不相同.

#### 代码

```c++
#include <iostream>
#include <cstring>
#include <algorithm>

using namespace std;

int n, res;
int cnt[10]; //统计1~9每个数字的使用次数.
bool check(int x)
{
    if (x <= 9999) cnt[0] ++; //0xxxx使用了一个数字0
    if (cnt[0] > 1) return false;
    for (int n = x; n; n /= 10)
    {
        int digit = n % 10;
        cnt[digit] ++;
        if (cnt[digit] > 1) return false;
    }
    return true;
}
void solve (int n)
{
    // 枚举fghij
    int _max = 98765 / 2;
    for (int i=1234; i < _max; i++)
    {
        memset(cnt, 0, sizeof cnt);
        if (check(i) && check(i*n)) {
            ++res;
            printf("%05d / %05d = %d\n", i*n, i, n);
        }
    }
}
int main()
{
    int line = 0;
    while (cin >> n && n)
    {
        if (line++ > 0 ) printf("\n");
        solve(n);
        if (res == 0) printf("There are no solutions for %d.\n", n);
        res = 0;
        
    }
    return 0;
}
```

### P2241 统计方形（数据加强版）

题目链接：[P2241 统计方形（数据加强版）](https://www.luogu.com.cn/problem/P2241)

#### 题目描述

有一个 `n` $\times$` m`方格的棋盘，求其方格包含多少正方形、长方形（不包含正方形）。

#### 输入格式

一行，两个正整数 `n`, `m`（`n` $\le$5000,`m`$\le$5000）.

#### 输出格式

一行，两个正整数，分别表示方格包含多少正方形、长方形（不包含正方形）。

#### 输入样例

```
2 3
```

#### 输出样例

```
8 10
```

#### 分析

容易发现，一个m$\times$n的方格中的a$\times$b的矩形(a $\le$m,b$\le$n)的个数为(m - a + 1)$\times$(n - b + 1).

因此只要通过枚举a,b并分别统计a=b和a$\ne$b的矩形数量即可。

#### 代码

```c++
#include <iostream>
#include <cstring>
#include <algorithm>

using namespace std;
typedef long long LL;

int n, m;
LL cnt_square, cnt_rectangle;

void solve()
{
    for (int a = 1; a <= n ; ++ a)
    {
        for (int b = 1; b <= m; ++ b)
        {
            if (a != b) cnt_rectangle += (m - b + 1) * (n - a + 1);
            else cnt_square += (m - b + 1) * (n - a + 1);
        }
    }
    
}
int main()
{
    cin >> n >> m;
    solve();
    cout << cnt_square << " " << cnt_rectangle  << endl;
    return 0;
}
```

### Maximum Product

题目链接：[Maximum Product](https://vjudge.net/problem/UVA-11059)

#### 题目描述

Given a sequence of integers $S = {S_1, S_2, . . . , S_n}$, you should determine **what is the value of the maximum positive product involving consecutive terms of S**. If you cannot find a positive sequence, you should consider 0 as the value of the maximum product. 

#### Input

Each test case starts with `1 ≤ N ≤ 18`, the number of elements in a sequence. Each element $S_i$ is an integer such that −10 ≤ $S_i$ ≤ 10. Next line will have N integers, representing the value of each element in the sequence. There is a blank line after each test case. The input is terminated by end of file (EOF). 

#### Output

For each test case you must print the message: ‘Case #M: The maximum product is P.’, where M is the number of the test case, starting from 1, and P is the value of the maximum product. After each test case you must print a blank line. 

#### Sample Input

```
3 
2 4 -3

5
2 5 -1 2 -1 
```

#### Sample Output 

```
Case #1: The maximum product is 8.

Case #2: The maximum product is 20.

```

#### 分析

数据范围小，直接枚举每一个序列的起点和终点

#### 代码

```c++
#include <iostream>
#include <cstring>
#include <algorithm>

using namespace std;

typedef long long LL;
int s[20];
int n;
int main()
{
    int idx = 1;
    while (cin >> n)
    {
        
        LL ans = 0;
        for (int i=0; i<n; ++i) cin >> s[i];
        //枚举每一个序列的起点和终点
        for (int start=0; start<n; ++start)
        {
            for (int end=start; end<n; ++end)
            {
                LL res = 1;
                for (int i=start; i<=end; ++i)
                {
                    res *= s[i];
                }
                ans = max(ans, res);
            }
        }
        printf("Case #%d: The maximum product is %lld.\n", idx++, ans);
        if (idx > 1) printf("\n");
    }
    
    return 0;
}
```

### Fractions Again?! 

题目链接：[Fractions Again?!](https://vjudge.net/problem/UVA-10976)

#### 题目描述

It is easy to see that for every fraction in the form $\frac{1}{k}$ (k > 0), we can always find two positive integers x and y, x $\ge$ y, such that: 
$$
\frac{1}{k}=\frac{1}{x}+\frac{1}{y}
$$
​    Now our question is: can you write a program that counts how many such pairs of x and y there are for any given k? 

#### Input

 Input contains no more than 100 lines, each giving a value of `k (0 < k ≤ 10000)`.

 #### Output

 For each k, output the number of corresponding `(x, y)` pairs, followed by a sorted list of the values of `x` and `y`, as shown in the sample output. 

#### Sample Input 

```
2 
12
```

#### Sample Output

```
2
1/2 = 1/6 + 1/3
1/2 = 1/4 + 1/4
8
1/12 = 1/156 + 1/13
1/12 = 1/84 + 1/14
1/12 = 1/60 + 1/15 
1/12 = 1/48 + 1/16 
1/12 = 1/36 + 1/18 
1/12 = 1/30 + 1/20 
1/12 = 1/28 + 1/21 
1/12 = 1/24 + 1/24
```

#### 分析

$$
\because x \ge y,\therefore \frac{1}{x}\ge\frac{1}{y}\Rightarrow \frac{1}{k}=\frac{1}{x}+\frac{1}{y}\ge\frac{2}{y}\Rightarrow y\le2k.又\frac{1}{k}>\frac{1}{y}\Rightarrow y>k.
\\
\frac{1}{k}=\frac{1}{x}+\frac{1}{y}\Rightarrow \frac{1}{x}=\frac{1}{k}-\frac{1}{y}\Rightarrow x=\frac{ky}{y-k}.
$$

$k\in(0,10000],只需枚举y\in[k+1,2k],然后判断x是否为正整数即可.$

#### 代码

```c++
#include <iostream>
#include <cstring>
#include <algorithm>
#include <vector>

using namespace std;

int k, cnt;
vector<pair<int, int>> v;

void solve(int n)
{
    cnt = 0;
    for (int y=k+; y<=2*n; ++y)
    {
        if (y - k > 0 && (k*y) % (y-k) == 0){
            ++ cnt;
            v.push_back({(k*y) / (y-k), y});
        }
    }
}
int main()
{
    while (cin >> k)
    {
        solve(k);
        cout << cnt << endl;
        for (int i=0; i<v.size(); ++i)
        {
            printf("1/%d = 1/%d + 1/%d\n", k, v[i].first, v[i].second);
        }
        v.clear();
    }
    
    return 0;
}
```

### P1618三连击（加强版）

[P1618三连击加强版](https://www.luogu.com.cn/problem/P1618)

#### 题目描述

将 `1, 2,…,9` 共 9 个数分成三组，分别组成三个三位数，且使这三个三位数的比例是 `A:B:C`，试求出所有满足条件的三个三位数，若无解，输出 `No!!!`。

#### 输入格式

三个数，`A,B,C`

#### 输出格式

若干行，每行 3 个数字。按照每行第一个数字升序排列。

#### 输入样例

```
1 2 3
```

#### 输出样例

```
192 384 576
219 438 657
273 546 819
327 654 981
```

#### 说明/提示

保证 `A<B<C`。

#### 分析

设三个三位数为`i`,`j`,`k`由于题目保证`A<B<C`,因此有 `i<j<k<1000`

所以有`i<333`,因为数的每一位不能相同，所以`123<=i<=329`

只需枚举`i`,通过比例算出`j`,`k`,然后判断是否可行即可.

#### 代码

```c++
#include <iostream>
#include <cstring>
#include <algorithm>

using namespace std;
int ct;
int cnt[10]; //统计1-9使用次数
bool check(int x)
{
    cnt[0] = 1;//0不能使用
    for (int i=x; i; i/=10)
    {
        int d=i%10;
        cnt[d] ++;
        if (cnt[d] > 1) return false;
    }
    return true;
}
int main()
{
    int a, b, c;
    cin >> a >> b >> c;
    for (int i=123; i<=329; ++i)
    {
        memset(cnt, 0, sizeof cnt);
        //a: b = i: j, a: c = i
        int j = i * b / a, k = i * c / a;
        if (check(i) && check(j) && check(k))
        {
            ++ct;
            printf("%d %d %d\n", i, j, k);
        }
    }
    if (ct == 0) puts("No!!!");
    return 0;
}
```

