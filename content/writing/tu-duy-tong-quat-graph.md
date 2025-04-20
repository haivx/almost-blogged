---
title: Tư duy tổng quát cho bài toán graph
description:  Trước khi áp dụng một thuật toán nào đó (như DFS/BFS), bạn gần như luôn cần dựng trước một cấu trúc dữ liệu (data structure) phù hợp để biểu diễn dữ liệu đầu vào.
date: 2025-03-06T16:00:00.006Z
modified: 2025-03-28T11:31:14-06:00
published: true
tags:
  - python
  - algorithm
---

Bất kỳ bài toán nào (dù là chuỗi, mảng, cây, đồ thị,...) bạn đều nên làm theo quy trình này:

> “Không có cấu trúc dữ liệu đúng → thuật toán đúng cũng trở nên vô dụng.”

- Bước 1: Phân tích đầu vào
- Bước 2: Chọn cấu trúc dữ liệu phù hợp
- Bước 3: Xây dựng cấu trúc dữ liệu từ input
- Bước 4: Chạy thuật toán trên cấu trúc đã dựng
 

Dưới đây là template chung dựng đồ thị cho mọi tình huống bạn gặp trong thuật toán — chia theo 4 loại phổ biến nhất:

## 1.  Đồ thị vô hướng, không trọng số, đỉnh là số (0 → N-1)
```sh
# Dùng adjacency list (danh sách kề)
graph = [[] for _ in range(N)]
for _ in range(E):
    a, b = map(int, input().split())
    graph[a].append(b)
    graph[b].append(a)  # vì vô hướng
```
## 2. Đồ thị có hướng, không trọng số, đỉnh là số
```sh
graph = [[] for _ in range(N)]
for _ in range(E):
    a, b = map(int, input().split())
    graph[a].append(b)  # chỉ một chiều
```

## 3. Đồ thị có trọng số, đỉnh là số
```sh
graph = [[] for _ in range(N)]
for _ in range(E):
    a, b, w = map(int, input().split())  # w là trọng số
    graph[a].append((b, w))
    graph[b].append((a, w))  # nếu vô hướng, nếu có hướng thì bỏ dòng này
```
👉 Lúc này, graph[u] là danh sách các tuple (v, weight)👉 Lúc này, graph[u] là danh sách các tuple (v, weight)

## 4. Đồ thị đỉnh là string (tên người, từ vựng...)
```sh
from collections import defaultdict

graph = defaultdict(list)
for _ in range(E):
    a, b = input().split()
    graph[a].append(b)
    graph[b].append(a)  # nếu vô hướng
```
📌 Thích hợp cho bài kiểu: "Alice là bạn của Bob", "cat → dog", v.v.

## Mẹo thêm: chuyển string ↔ index
Nếu đề bài cho tên là string, nhưng bạn muốn xài kiểu số (0, 1, 2...) để tối ưu hơn:

```sh
name_to_id = dict()
id_counter = 0

def get_id(name):
    global id_counter
    if name not in name_to_id:
        name_to_id[name] = id_counter
        id_counter += 1
    return name_to_id[name]
```