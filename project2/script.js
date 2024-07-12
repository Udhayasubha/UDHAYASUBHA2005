function subscriberData() {
    let nameEl = document.querySelector("#floatingInputname").value
    let emailEl = document.querySelector("#floatingInputmail").value
    let numberEl = document.querySelector("#floatingInputnumber").value

    let subscriberInfo = []
    let subscriberInfo2 = { nameEl, emailEl, numberEl }
    subscriberInfo.push(subscriberInfo2)
    let subscriberDetail = localStorage.setItem("Subscriber Infomation", JSON.stringify(subscriberInfo))
    console.log(subscriberDetail)
}
const getdata = async () => {
    const a = await fetch("data.json")
    const b = await a.json()
    b.map((index, value) => {
        let preproduct = document.querySelector("#alpha")
        preproduct.innerHTML += '<div class="card magic bg-body-tertiary my-2 mx-3 col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3" style="width: 16rem;">' +
            '<img src="' + index.image + '" class="card-img-top" alt="No-Internet">' +
            '<div class="card-body">' +
            '<h5 class="card-title">' + index.Title + '</h5>' +
            '<p class="card-text"><small class="text-body-secondary">' + index.Brand + '</small> </p>' +
            '<p class="card-text">' + index.Price + '</p>' +
            '<p class="card-text"><small class="text-body-secondary">' + index.Category + '</small> </p>' +
            '<p><button class="btn">Buy Now</button><button class="btn ">Add to Card</button></p>' +
            '</div>'
            + '</div>'
    })
}
getdata()

const getMaindata = async () => {
    const a = await fetch("main.json")
    const b = await a.json()
    b.map((index, value) => {
        let preproduct = document.querySelector("#beta")
        preproduct.innerHTML += '<div class="card magic bg-body-tertiary my-2 mx-3 col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3" style="width: 16rem;">' +
            '<img src="' + index.image + '" class="card-img-top" alt="No-Internet">' +
            '<div class="card-body">' +
            '<h5 class="card-title">' + index.Title + '</h5>' +
            '<p class="card-text"><small class="text-body-secondary">' + index.Brand + '</small> </p>' +
            '<p class="card-text">' + index.Price + '</p>' +
            '<p class="card-text"><small class="text-body-secondary">' + index.Category + '</small> </p>' +
            '<p><button class="btn">Buy Now</button><button class="btn ">Add to Card</button></p>' +
            '</div>'
            + '</div>'
    })
}
getMaindata()