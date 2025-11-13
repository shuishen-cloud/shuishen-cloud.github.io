var posts=["2025/11/13/将-Blog-托管到-Github/","2025/11/13/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };