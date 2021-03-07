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

    function joinCards(id) {
        $(`#${id} .carousel-item`).each(function () {
            let minPerSlide = 3;
            let next = $(this).next();
            if (!next.length) {
                next = $(this).siblings(":first");
            }
            next.children(":first-child").clone().appendTo($(this));

            for (let i = 0; i < minPerSlide; i++) {
                next = next.next();
                if (!next.length) {
                    next = $(this).siblings(":first");
                }

                next.children(":first-child").clone().appendTo($(this));
            }
        });
    }
    $(function popular_tutorials() {
        $('#loader_vid').show();
        $.ajax({
            type: 'GET',
            url: "https://smileschool-api.hbtn.info/popular-tutorials",
            success: (videos) => {
                videos.forEach(element => {
                    var act = ''
                    if (element.id > 1) {
                        act = "active"
                    }
                    $('#loader_vid').hide();
                    $('#inner-card').append(`
                    <div class="carousel-item  d-flex justify-content-space-between ${act}">

                    <div class="carousel-item ">
                    <d class="col-md-3">
                        <div class="card card-body">
                        <img src=" ${element.thumb_url}" height="150px">
                        <div class="centered"><img src="images/play.png" width="64px" height="64px">
                        </div>
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
                    </div>
                                    
                                        <div class="col-4 text-right purple-text">
                                            ${element.duration}
                                        </div>
                                    </div>
                                </div>`
                    )


                    joinCards("card_inner")
                });
            }
        });
    });

    $(function latest_videos() {
        $('#loader_vid_last').show();
        $.ajax({
            type: 'GET',
            url: "https://smileschool-api.hbtn.info/latest-videos",
            success: (videos) => {
                videos.forEach(element => {
                    var act = ''
                    if (element.id > 1) {
                        act = "active"
                    }
                    $('#loader_vid_last').hide();
                    $('#inner-card-last').append(`
                    <div class="carousel-item  d-flex justify-content-space-between ${act}">

                    <div class="carousel-item ">
                    <d class="col-md-3">
                        <div class="card card-body">
                        <img src=" ${element.thumb_url}" height="150px">
                        <div class="centered"><img src="images/play.png" width="64px" height="64px">
                        </div>
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
                    </div>
                                    
                                        <div class="col-4 text-right purple-text">
                                            ${element.duration}
                                        </div>
                                    </div>
                                </div>`
                    )


                    joinCards("card_inner")
                });
            }
        });
        $(function quotes_pricing() {
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
                        $('#inner-caros_pricing').append(`<div class="carousel-item ${id_active}">
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
    });
    quotes();
    popular_tutorials();
    latest_videos();
    quotes_pricing();

});
