$(function(){ //สร้าง function

    $(".toggle").on("click",function(){  //ทำการเข้าถึง class toggole ถ้ามีการ clickให้ทำงานต่อไปนี้ 

        if($(".item").hasClass("active")){ //เข้าถึง classs item ถ้าหากมี active ให้ทำดังต่อไปนี้
            $(".item").removeClass("active"); //ทำการเข้าถึง class item ทำการลบ active
            $(this).find("a").html("<i class='fas fa-bars'></i>");  //ทำการเข้าถึง class toggle ทำการเปลี่ยน tag ใน class toggleดังนี้ <i class='fas fa-bars'></i>
        } else{ //หากไม่ตรงตามเงื่อนไขให้ทำดังนี้
            $(".item").addClass("active");//ทำการเข้าถึง class item เพิ่ม active
            $(this).find("a").html("<i class='fas fa-times'></i>"); //ทำการเข้าถึง class toggle ทำการเปลี่ยน tag ใน class toggleดังนี้ <i class='fas fa-times'></i>
        }
    });
});