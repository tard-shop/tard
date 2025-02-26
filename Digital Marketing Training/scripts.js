// لوحة المتصدرين
const leaderboardData = [
    { name: "مازن احمد", score: 1578 },
    { name: "عمر محمد", score: 1296 },
    { name: "اسلام صابر", score: 1184 }
];
const leaderboardList = document.getElementById('leaderboardList');
leaderboardData.forEach((item, index) => {
    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.textContent = `${index + 1}. ${item.name} - ${item.score} نقطة`;
    leaderboardList.appendChild(li);
});

// أسئلة وأجوبة
document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});

// استطلاع الرأي
document.getElementById('pollForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const selectedOption = document.querySelector('input[name="poll"]:checked').value;
    document.getElementById('pollResult').textContent = `شكرًا لتصويتك! الإجابة المختارة: ${selectedOption}`;
});

// اقتباسات تحفيزية
const quotes = [
    "النجاح هو مجموع الجهود الصغيرة المتكررة يوميًا.",
    "لا تنتظر الفرصة، اصنعها بنفسك.",
    "التفاؤل هو الإيمان الذي يؤدي إلى الإنجاز.",
    "إذا كنت تستطيع تخيلها، يمكنك تحقيقها.",
    "الأشياء الجيدة تأتي لمن ينتظرون، ولكن الأفضل يأتي لمن يسعى.",
    "قم بما تستطيع، بما تملك، حيثما كنت.",
    "كل يوم هو فرصة جديدة لتغيير حياتك.",
    "المثابرة هي مفتاح النجاح.",
    "الفشل هو مجرد فرصة للبدء من جديد بذكاء أكبر.",
    "قم بما تخاف منه ونجاحك مضمون.",
    "الأفكار الكبيرة تبدأ بأحلام كبيرة.",
    "عندما يكون لديك شغف، كل شيء يصبح ممكنًا.",
    "نحن نصنع مستقبلنا بأيدينا.",
    "العمل الشاق يغلب الموهبة إذا كانت الموهبة لا تعمل بجد.",
    "النجاح ليس نهائيًا، والفشل ليس قاتلًا: الشجاعة للاستمرار هي التي تهم.",
    "المستقبل ينتمي لأولئك الذين يؤمنون بجمال أحلامهم.",
    "إذا كنت تسعى لتحقيق شيء ما، فلا تستسلم أبداً.",
    "الحلم هو الحقيقة في انتظار الحدوث.",
    "من يؤمن بنفسه يستطيع أن يحرك الجبال.",
    "النجاح ليس بكمية المال التي تحصل عليها، بل بتأثيرك على العالم من حولك.",
    "سر النجاح هو أن تعرف شيء لا يعرفه أحد آخر.",
    "الوقت هو أثمن ما نملكه. استغله بحكمة.",
    "الثقة بالنفس هي البداية لكل نجاح.",
    "العوائق لا يمكنها أن توقفك، المشكلات لا يمكنها أن توقفك، الأشخاص الآخرون لا يمكنهم أن يوقفوك، أنت فقط تستطيع أن توقف نفسك.",
    "الطريق إلى النجاح يكون دائمًا تحت الإنشاء.",
    "السعادة ليست شيئًا جاهزًا، إنها تأتي من أفعالك."
];

document.getElementById('newQuote').addEventListener('click', () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('quoteText').textContent = randomQuote;
});

// المكافآت
document.getElementById('checkReward').addEventListener('click', () => {
    const rewards = ["0جنية", "0جنية", "0جنية"];
    const randomReward = rewards[Math.floor(Math.random() * rewards.length)];
    document.getElementById('rewardResult').textContent = `مبروك! لقد فزت بـ ${randomReward}`;
});

// دروس تفاعلية
const steps = [
    "حدد الجمهور اللي هتستهدفة من خلال نوعية المنتج اللي هتسوقلو.",
    "إعمل محتوى جذاب: إكتب مقالات، صور، وفيديوهات تشرح المنتج وتوضح مميزاته.",
    "إستغل السوشيال ميديا: أنشر المحتوى بتاعك على الفيسبوك، إنستاجرام، تويتر، ولينكدإن عشان توصل لأكبر عدد ممكن.",
    "إعمل مدونة أو موقع إلكتروني: أنشر مقالات ومحتوى قيم عن المنتج وازاي ممكن يفيد المستخدمين.",
    "ادخل علي بوستات السوشيال ميديا وشوف اعلانات لنفس المنتج اللي بتسوقلو وشوف كومنتات اللي عاييزين يعرفو عن المنتج اكتر.",
    "ادخلهم وحاول تقنعهم بمنتجك."
];
let currentStep = 0;
document.getElementById('nextStep').addEventListener('click', () => {
    if (currentStep < steps.length) {
        document.getElementById('tutorialText').textContent = steps[currentStep];
        currentStep++;
    } else {
        document.getElementById('tutorialText').textContent = "لقد أكملت الدرس!";
    }
});

// العروض والهدايا
document.getElementById('checkOffer').addEventListener('click', function () {
    const result = Math.random() < 0.2; // 20% chance to win
    const offerResult = document.getElementById('offerResult');
    if (result) {
        offerResult.textContent = "للأسف، لم تفز هذه المرة. حاول مرة أخرى الأسبوع القادم!";
        offerResult.style.color = "red";
    } else {
        offerResult.textContent = "للأسف، لم تفز هذه المرة. حاول مرة أخرى الأسبوع القادم!";
        offerResult.style.color = "red";
    }
});