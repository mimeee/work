# vim操作

- normal模式下
  - `k` 上
  - `j` 下
  - `h` 左
  - `l` 右
  - `a` 向文字后面插入(normal模式变成insert模式)
  - `i` 向文字前面插入(normal模式变成insert模式)
  - `/{content} + Enter`  查找内容，按下回车进行查找
    - `n`  查看下一个查找结果
    - `N`  查看上一个查找结构
  - `:%s/{find-content}/{replace-content}/gc` 替换
    - `g` 全局替换
    - `c` 每次替换都询问
    - `\c`  忽略大小写替换
  - `s` 删除后插入