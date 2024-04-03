function submitForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    
    if (name !== "" && email !== "" && message !== "") {
      
        alert("تم إرسال رسالتك بنجاح!");
    } else {
      
        alert("يرجى ملء جميع الحقول!");
    }
}
window.onload = function() {
    document.getElementById("welcome-message").style.display = "block";
    setTimeout(function(){
      document.getElementById("welcome-message").style.display = "none";
    }, 3000); // يختفي بعد 3 ثواني
  };
  function increaseFontSize() {
    var text = document.getElementById("text");
    text.style.fontSize = "24px"; 


    
    // زيادة حجم الخط إلى 36 بيكسل عند مرور الماوس

  }
  
  function resetFontSize() {
    var text = document.getElementById("text");
    text.style.fontSize = "15px"; // إعادة الحجم إلى 24 بيكسل عند خروج الماوس
  }
  function increaseIconSize1() {
    this.style.fontSize = "36px"; // زيادة حجم الأيقونة إلى 36 بيكسل عند مرور الماوس
  }
  
  function resetIconSize1() {
    this.style.fontSize = "24px"; // إعادة الحجم إلى 24 بيكسل عند خروج الماوس
  }
// ===============================================================
