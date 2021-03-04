$(document).ready(function () {
    $(function quotes() {
        $('#loader').show();
        $.ajax({
            type: 'GET',
            url: "https://smileschool-api.hbtn.info/quotes",
            success: (quotes) => {
                $('#loader').hide()
                quotes.forEach(element => {
                    var id_active = ''
                    if (element.id === 1) {
                        id_active = "active"
                    }
                    $('#inner-caros').append(`<div class="carousel-item ${id_active}">
                <div class="row justify-content-around">
                    <div class="col-sm-1">
                        <img class="rounded-circle mx-auto m-3 d-block" src="${element.pic_url}" width="150"
                            height="150">
                    </div>
                    <div class="col-sm-5 mx-3">
                        <p>${element.text}</p>
                        <p><span class="font-weight-bold">${element.name}</span><br>
                            <span class="font-italic">${element.title}</span>
                        </p>
                    </div>
                </div>
            </div>`
                    )

                });
            }
        });
    });

    $(function popular_tutorials() {
        $('#loader').show();
        $.ajax({
            type: 'GET',
            url: "https://smileschool-api.hbtn.info/popular-tutorials",
            success: (quotes) => {
                $('#loader').hide()
                quotes.forEach(element, (i, element) => {
                    $('#inner-card').append(`
                    <div class="carousel-item justify-content-center ${i} ">
                        
                    <div class="card ">
                        <div class="card style="width: 18rem;">
                            <img src=" ${element.thumb_url}" width="280px" height="150px">
                            <div class="centered play_img"><img src="images/play.png">
                            </div>
                        </div>
                        <div class="card-body">
                            <p class="card-text font-weight-bold">${element.title}</p>
                            <p class="card-text font-weight-light text-muted">${element["sub-title"]}</p>
                            <p class="purple-text"><img class="rounded-circle mr-3"
                                    src="${element.author_pic_url}" width="30px" height="30px">${element.author}</p>
                        </div>
                        <div class="row justify-content-between mb-3">
                            <div class="col">
                                <img src="images/star_on.png" width="15px" height="15px" alt=""
                                    loading="lazy">
                                <img src="images/star_on.png" width="15px" height="15px" alt=""
                                    loading="lazy">
                                <img src="images/star_on.png" width="15px" height="15px" alt=""
                                    loading="lazy">
                                <img src="images/star_on.png" width="15px" height="15px" alt=""
                                    loading="lazy">
                                <img src="images/star_off.png" width="15px" height="15px" alt=""
                                    loading="lazy">
                            </div>
                            <div class="col-4 text-right purple-text">
                            ${element.duration}
                            </div>
                        </div>
                    </div>
                </div>
                </div>`
                    )

                });
            }
        });
    });


    test();

});