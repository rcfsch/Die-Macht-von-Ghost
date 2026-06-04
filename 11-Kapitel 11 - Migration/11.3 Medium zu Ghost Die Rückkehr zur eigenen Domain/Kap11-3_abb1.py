import os
import frontmatter
import requests
for file in os.listdir("posts"):
if file.endswith(".md"):
with open(f"posts/{file}") as f:
post = frontmatter.load(f)
title = post["title"]
content = post.content
tags = post.get("tags",[])
#Per Admin API an Ghost senden
response = requests.post(
"https://deinblog.de/ghost/api/admin/posts/",
headers={"Authorization":"Bearer..."},
json={"posts":[{"title":title,"html":content,"tags":tags}]}
