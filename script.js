// تحديد جميع أقسام الموقع
const sections = document.querySelectorAll("section");

// مراقبة ظهور الأقسام أثناء التمرير
const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

});

// تشغيل المراقبة على جميع الأقسام
sections.forEach((section) => {
    observer.observe(section);
});
