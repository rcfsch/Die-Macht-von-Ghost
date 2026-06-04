import requests
import json
E
y
with open("contentful-posts.json") as f:
posts = json.load(f)
for post in posts:
v
data = {
1]:,s1sod..
"title":post["title"],
"html": post["body"],
"status":"published",
"featured_image": post.get("image_url")
]
{
response = requests.post(
"https://deinblog.de/ghost/api/admin/posts/",
headers={"Authorization":"Bearer..."},
json=data
