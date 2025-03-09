let xAxisData=[
    {
        "name":'Jan',
        "sale":112_000
    },
    {
        "name":'Feb',
        "sale":99_000
    },
    {
        "name":'Mar',
        "sale":12_000
    },
    {
        "name":'Apr',
        "sale":110_000
    },
    {
        "name":'May',
        "sale":54_000
    },
    {
        "name":'Jun',
        "sale":85_000
    },
    {
        "name":'Jul',
        "sale":34_000
    },
    {
        "name":'Agu',
        "sale":18_000
    },
    {
        "name":'Sep',
        "sale":0
    },    {
        "name":'Oct',
        "sale":73_000
    },    {
        "name":'Nov',
        "sale":12_900
    },
    {
        "name":'Dec',
        "sale":15_000
    },
]


let newUsers=[
    {id:1,title:'danial Mousavi',desc:'FrontEnd Dev',img:'https://media.licdn.com/dms/image/v2/D4D03AQFwYCgMKq_qYQ/profile-displayphoto-shrink_400_400/B4DZUazeMnHkAk-/0/1739911457755?e=1746662400&v=beta&t=BDMJ7AZLi9ir8CQXVnsPcJcgn-lLuMWQdcPlAeL7lOA'},
    {id:2,title:'amin rezai',desc:'Backend Dev',img:'images/2.jpg'},
    {id:3,title:'mohamad ahmadi',desc:'SEO',img:'images/3.jpg'},
    {id:4,title:'Ali Ghasemi',desc:'Devops',img:'images/4.jpg'},
    {id:5,title:'zahara sharifi',desc:'Full stack Dev',img:'images/1.jpeg'},

]

let transActions=[
    {id:1,userName:'ramin tajangi',date:'7 agu 2024',status:'Approved',img:'images/5.webp',price:112_000},
    {id:2,userName:'john smith',date:'15 jan 2025',status:'pending',img:'images/6.webp',price:100_000},
    {id:3,userName:'leo karen',date:'25 sep 2024',status:'Decline',img:'images/7.jpg',price:115_000},
    {id:4,userName:'mohammad salehi',date:'11 feb 2025',status:'Approved',img:'images/8.jpg',price:1_000},
    {id:5,userName:'sajad shahi',date:'2 mar 2024',status:'Decline',img:'images/9.jpg',price:18_000},
]
let userRows=[
    {id:1,userName:'ramin tajangi',status:'active',avatar:'images/5.webp',transAction:112_000,email:'ramin@gmail.com'},
    {id:2,userName:'john smith',status:'deActive',avatar:'images/6.webp',transAction:100_000,email:'john@gmail.com'},
    {id:3,userName:'leo karen',status:'active',avatar:'images/7.jpg',transAction:115_000,email:'leo@gmail.com'},
    {id:4,userName:'mohammad salehi',status:'active',avatar:'images/8.jpg',transAction:1_000,email:'mmd@gmail.com'},
    {id:5,userName:'sajad shahi',status:'deActive',avatar:'images/9.jpg',transAction:18_000,email:'sajad@gmail.com'},
]
export let ProductsData=[
    {id:1,title:'Asus',price:'1000',img:'https://dkstatics-public.digikala.com/digikala-products/07452e880323b7c419bd9a833f61c9dcd4d21a2a_1721750094.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80'},
    {id:2,title:'Loq',price:'1200',img:'https://dkstatics-public.digikala.com/digikala-products/290d8b138d9a950d58f1ba6747f61225751ea685_1717934248.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80'},
    {id:3,title:'MACBOOk',price:'2000',img:'https://dkstatics-public.digikala.com/digikala-products/f947a1158081a83438a8f6d7d53ecbdd69f72a37_1723644625.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80'},
    {id:4,title:'ROG',price:'1500',img:'https://dkstatics-public.digikala.com/digikala-products/82c179919fbdc0c6c6e4bff76f2c8d08fa18b474_1730881300.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80'},
    {id:5,title:'victus',price:'1500',img:'https://dkstatics-public.digikala.com/digikala-products/6ac95f2a849d0ce48f3bc30bf02794b0c24eaafe_1735158317.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80'},


]
export let productsChartData=[
    {
        name:'jan',
        sales:4000
    },
    {
        name:'feb',
        sales:3000
    },
    {
        name:'mar',
        sales:5000
    },
]
export {xAxisData,newUsers,transActions,userRows}