var counter = 0;
function changeBG(){
    var imgs = [
        "url(https://unsplash.com/blog/content/images/2020/07/blm-1.jpg)",
        "url(https://images.unsplash.com/photo-1444012236767-1b471c68781c?dpr=2&fit=crop&fm=jpg&h=825&ixlib=rb-0.3.5&q=50&w=1450)",
        "url(https://unsplash.com/blog/content/images/max/2560/1-ArgvDeojp0i_3k-S726N2Q.png)",
        "url(https://unsplash.com/blog/content/images/max/2560/0-zXCWdeXCsDJnLqDA.jpeg)",
        "url(https://images.unsplash.com/photo-1445888985293-8e1b904061c4?dpr=2&fit=crop&fm=jpg&h=825&ixlib=rb-0.3.5&q=50&w=1450)",
        "url(https://images.unsplash.com/photo-1444228250525-3d441b642d12?dpr=2&fit=crop&fm=jpg&h=825&ixlib=rb-0.3.5&q=50&w=1450)",
        "url(https://images.unsplash.com/photo-1444210971048-6130cf0c46cf?dpr=2&fit=crop&fm=jpg&h=825&ixlib=rb-0.3.5&q=50&w=1450)",
        "url(https://images.unsplash.com/photo-1445308394109-4ec2920981b1?dpr=2&fit=crop&fm=jpg&h=825&ixlib=rb-0.3.5&q=50&w=1450)"
      ]
    
    if(counter === imgs.length) counter = 0;
    $("body").css("background-image", imgs[counter]);

    counter++;
}
  
  setInterval(changeBG, 2000);


