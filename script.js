// تحديد جميع أقسام الموقع
const sections = document.querySelectorAll("section");

// إعداد مراقبة ظهور الأقسام
const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }

    });

});

// إضافة تأثير الظهور ومراقبة الأقسام
sections.forEach((section) => {
    section.classList.add("reveal");
    observer.observe(section);
});
