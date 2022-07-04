$(document).ready(()=>{
  $.ajax({
    url: 'https://fakestoreapi.com/products',
    success: datas => {
      console.log(datas)
      for(let data of datas){
        $('.group-box').append(`
        <div class="col-xs-12 col-md-6 col-lg-3">
          <div class="card box shadow p-3 bg-body rounded h-100">
            <div class="card-image text-center">
              <div>
                <button class="btn rounded-pill fs-6 px-4">Quick View</button>
                <button class="btn rounded-pill fs-6 px-4" onClick="quickShop(${data.price})">Quick Shop</button>
              </div>
              <img src="${data.image}" class="p-2 img-fluid"  alt="">
            </div>
            <div class="box-details card-body pt-1 mb-4">
              <h6 class=" mt-3">${data.title}</h6>
              <p class="pt-3">&#36; ${data.price}</p>
              <p class="pt-3" onClick="wishList(${data.price})"><ion-icon name="heart-outline"></ion-icon></p>
            </div>
          </div>
        </div>`)
      }
    },
    error: () => {
      console.log('err')
    }
  })
})

let quickShop = price => {
  $('#cart').html(parseInt($('#cart').html())+1)
}

let wishList = () => {
  $('#wishlist').html(parseInt($('#wishlist').html())+1)
}