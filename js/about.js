let aside_li = document.querySelectorAll(".aside ul li")
const content_db = [
    {
        name: "Linen",
        footprint: {
            amount: 5.7,
            value: "low",
            tree_absorb: 0.03,
        },
        interest: `Linen fabric is produced from flax, a plant fiber that can grow with 
                    little attention or fertilizers. Flax is mainly cultivated in regions with 
                    sufficient rainfall, e.g. north-west Europe, eliminating the need for irrigation 
                    and contributing to a minimal water impact, meaning even standard linen is a lower impact choice.`
    },
    {
        name: "Polyester",
        footprint: {
            amount: 11.7,
            value: "high",
            tree_absorb: 0.1
        },
        interest: `Polyester is made from crude oil and the production is energy intensive. 
                    Recycled polyester, made from plastic bottles or discarded polyester textiles, 
                    avoids emissions resulting from the oil extraction process contributing to CO2 
                    savings of up to 75%. However, like standard polyester, it can shed plastic 
                    microfibers during use, contributing to marine pollution. We recommend using a 
                    GUPPYFRIEND® washing bag or similar to help capture microfibers.`
    },
    {
        name: "Nylon",
        footprint: {
            amount: 23.1,
            value: "high",
            tree_absorb: 0.9
        },
        interest: `Econyl has pioneered closed loop regeneration processes, transforming marine 
                    debris into recycled nylon with the quality of standard nylon and requires 50% 
                    less energy in production. Like standard nylon, it can shed plastic microfibers 
                    during use, contributing to marine pollution. We recommend using a GUPPYFRIEND® 
                    washing bag or similar to help capture the microfibers.`
    },
    {
        name: "Cutton",
        footprint: {
            amount: 6,
            value: "low",
            tree_absorb: 0.05
        },
        interest: `Cotton uses a disproportionate amount of pesticides. It is grown on just 2.5% of 
                    agricultural land worldwide, but accounts for 16% of all insecticides sold globally. 
                    Lower-impact cotton production uses crop rotation and biological means to control pests, 
                    which reduces soil, air and water contamination, and carbon emissions from the production 
                    of synthetic fertilizers and pesticides.`
    },
    {
        name: "Viscole",
        footprint: {
            amount: 14,
            value: "high",
            tree_absorb: 0.4
        },
        interest: `Viscose is a manufactured cellulosic fiber, primarily made from wood. Several initiatives, 
                    including CanopyStyle, ensure the raw materials used are sourced from responsibly managed 
                    forests, protecting ancient and endangered forests and rainforests. Examples of preferred 
                    viscose include LENZING™ Viscose and TENCEL™ Lyocell whose processing is done in a closed-loop 
                    system recycling the water and chemicals.`
    },
    {
        name: "Wool",
        footprint: {
            amount: 26,
            value: "high",
            tree_absorb: 1.1
        },
        interest: `While wool's share of the total textile fiber supply is only around 1.3%, it accounts for up 
                    to 5% of the recycled fibers market. The Responsible Wool Standard ensures animal welfare 
                    (e.g. no mulesing) and best practices in the management, protection and regeneration of the 
                    sheep grazing land.`
    },
];

aside_li.forEach((e, index) => {
    e.addEventListener("click", () => {
        aside_li.forEach(Element => {
            Element.classList.remove("current-list");
        })
        e.classList.add("current-list");
        displayContent(index);
    })
})

function displayContent(index) {
    let allContent = content_db[index];
    let { name, footprint: { amount, value, tree_absorb }, interest } = allContent;
    let footprint_content = document.querySelector(".footprint-content");

    let node = `    <h1 class="content-header">${name}</h1>
                    <h2 class="footprint">
                        Standard ${name}
                        <div class="${value}"><span class="carbon"></span>${amount} kg</div>
                        <span>per shirt</span>
                    </h2>
                    <div class="absorb">
                        <i class='bx bxs-tree'></i>
                        <h3><span>${tree_absorb}</span> trees absorbing CO2 for a year</h3>
                    </div>
                    <div class="might-interest">
                        <h4 class="interest">You might be interested to know :</h4>
                        <p>${interest}</p>
                    </div>
                `

    footprint_content.innerHTML = node;
}
displayContent(0);