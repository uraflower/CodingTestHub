N, M, start_node = map(int, input().split())
arr = [[0 for _ in range(N+1)] for _ in range(N+1)]

for _ in range(M):
    start, end = map(int, input().split())
    arr[start][end] = 1
    arr[end][start] = 1

stack = [start_node]
visited = []
while stack:
    cur = stack.pop()
    if cur not in visited:
        visited.append(cur)
        for i in range(N, 0, -1):
            if arr[cur][i] == 1 and i not in visited:
                stack.append(i)
print(*visited)

queue = [start_node]
visited = []
while queue:
    cur = queue.pop(0)
    if cur not in visited:
        visited.append(cur)
        for i in range(0, N+1):
            if arr[cur][i] == 1 and i not in visited:
                queue.append(i)
print(*visited)
