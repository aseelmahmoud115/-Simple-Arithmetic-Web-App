// عرض اليوم والتاريخ
document.getElementById("showDateButton").addEventListener("click", function () {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleString("ar-EG", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
    });
    document.getElementById("dateDisplay").innerText = "التاريخ والوقت الحالي: " + formattedDate;
});

// العمليات الحسابية
document.getElementById("calculateButton").addEventListener("click", function () {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operation = document.getElementById("operation").value;

    if (!isNaN(num1) && !isNaN(num2)) {
        let result;
        switch (operation) {
            case "add":
                result = num1 + num2;
                break;
            case "subtract":
                result = num1 - num2;
                break;
            case "multiply":
                result = num1 * num2;
                break;
            case "divide":
                result = num2 !== 0 ? num1 / num2 : "لا يمكن القسمة على صفر";
                break;
            default:
                result = "عملية غير معروفة";
        }
        document.getElementById("resultDisplay").innerText = `الناتج: ${result}`;

        // حفظ العملية في ملف نصي
        const operationText = `العملية: ${num1} ${operation} ${num2} = ${result}`;
        const blob = new Blob([operationText], { type: "text/plain" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "operation.txt";
        link.click();
    } else {
        alert("يرجى إدخال أرقام صحيحة!");
    }
});

// تغيير لون الأزرار
document.querySelectorAll(".color-option").forEach((button) => {
    button.addEventListener("click", function () {
        const newColor = this.getAttribute("data-color");
        document.querySelectorAll("button").forEach((btn) => {
            btn.style.backgroundColor = newColor;
        });
    });
});