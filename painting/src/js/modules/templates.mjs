const header_recomendation = (block) => {
  return `
    <div id="header_fixed">    
        <nav class="navbar navbar-expand-lg bg-dark" id="header">
            <div class="container-fluid" id="header">
                <a type="button" class="btn btn_head_clr" href="collection.html">${block.value[0]}</a>
                <button type="button" class="btn btn_head_clr" id="info" >${block.value[1]}</button>
                
            </div>
        </nav>
    </div>
    `;
};

const header_collection = (block) => {
  return `
  <div id="header_fixed">    

  <nav class="navbar bg-dark navbar-expand-lg" id="header">
      <div class="container-fluid">
      <div id="header">
      
      <a
      type="button"
      class="btn btn_head_clr"
      href="client.html"
      target="_self"
      >${block.value[0]}</a
      >
      </div>
          <form class="d-flex" role="search">
          <input
              class="form-control me-2 head_search"
              type="search"
              placeholder="${block.value[1]}"
              aria-label="Search"
          />
          
          <button class="btn btn_head_clr" type="submit">
          ${block.value[2]}
          </button>
          </form>
      </div>
  </nav>
  </div>
    `;
};
//#ebebeb

const carusel = (block) => {
  return `    
        <section class="container-centre py-5 text-center">   
            <div id="frame">
                <section id="carouselExampleControls" class="carousel slide" style="max-height:692px;" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img id="main-img" height="100%", width="100%" src=${block.image.src} alt="Изображение1"/>
                        </div>
                        <div class="carousel-item">
                            <img height=${block.image.height}, width=${block.image.width} src=${block.image.src} alt="Изображение2"/>
                        </div>
                        <div class="carousel-item">
                            <img height=${block.image.height}, width=${block.image.width} src=${block.image.src} alt="Изображение3"/>
                        </div>
                    </div>
                    <button class="carousel-control-prev" id="like" type="button" data-bs-target="#carouselExampleControls"  script="#">
                    
                        <span class="visually-hidden"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Следующий</font></font></span>
                    </button>
                    <button class="carousel-control-prev" id="main-btn-left" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev" script="#">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Предыдущий</font></font></span>
                    </button>
                    <button class="carousel-control-next" id="main-btn-right" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next" script="#">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Следующий</font></font></span>
                    </button>
                    
                </section>
            </div>
        </section>

    `;
};

function side_panel(block) {
  return `
        
            <div class="modal fade show" id="exampleModalScrollable" tabindex="-1" aria-labelledby="exampleModalScrollableTitle" style="display: none; background-color: rgb(46 45 45 / 50%);" aria-modal="true" role="dialog">
            <div class="py-5 text-center container" style="margin-top:80px">
                <div class="modal-dialog modal-dialog-scrollable">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalScrollableTitle">${block.value[0]}</h1>
                                <button type="button" class="btn-close" id="clsbtn"></button>
                            </div>
                            <div class="modal-body">
                                <p>${block.value[1]}</p>
                                <br><br><br><br><br><br><br>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        `;
}

const card = (block) => {
  return `
    <section class="py-5 text-center container">
    <div style="padding-top:4rem">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div class="col">
                <div class="card shadow-sm">
                    <svg
                    class="bd-placeholder-img card-img-top"
                    width="100%"
                    height="225"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Заполнитель: Миниатюра"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                    >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c"></rect>
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">${block.value[0]}</text>
                    </svg>

                    <div class="card-body">
                        <p class="card-text">
                            <font style="vertical-align: inherit">${block.value[1]}</font>
                        </p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                            <button
                                type="button"
                                class="btn btn-sm btn-outline-secondary"
                                id="info"
                            >
                                <font style="vertical-align: inherit"
                                ><font style="vertical-align: inherit">Описание</font></font
                                >
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
    `;
};

const footer = (block) => {
  return `
        <section class="py-5 text-center container", style="padding-top:1rem !important;padding-bottom:1rem !important;">
        <footer class="pt-4 pt-md-5 border-top", style="background-color: #00000;">
            <div class="row">
            <div class="col-12 col-md">
                <img class="mb-2" src="./favicon-32x32.png" alt="Logo" width="24" height="19">
                <small class="d-block mb-3 text-muted">${block.value[0]}</small>
            </div>
            <div class="col-6 col-md">
                <h5>${block.value[1]}</h5>
    
            </div>
            <div class="col-6 col-md">
                <h5>${block.value[2]}</h5>
                <a class="nav-link py-2 px-0 px-lg-2" href="https://github.com/toqsukr/Recommendation-system-of-painting" target="_blank" rel="noopener">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="navbar-nav-svg" viewBox="0 0 512 499.36" role="img"><title>GitHub</title><path fill="currentColor" fill-rule="evenodd" d="M256 0C114.64 0 0 114.61 0 256c0 113.09 73.34 209 175.08 242.9 12.8 2.35 17.47-5.56 17.47-12.34 0-6.08-.22-22.18-.35-43.54-71.2 15.49-86.2-34.34-86.2-34.34-11.64-29.57-28.42-37.45-28.42-37.45-23.27-15.84 1.73-15.55 1.73-15.55 25.69 1.81 39.21 26.38 39.21 26.38 22.84 39.12 59.92 27.82 74.5 21.27 2.33-16.54 8.94-27.82 16.25-34.22-56.84-6.43-116.6-28.43-116.6-126.49 0-27.95 10-50.8 26.35-68.69-2.63-6.48-11.42-32.5 2.51-67.75 0 0 21.49-6.88 70.4 26.24a242.65 242.65 0 0 1 128.18 0c48.87-33.13 70.33-26.24 70.33-26.24 14 35.25 5.18 61.27 2.55 67.75 16.41 17.9 26.31 40.75 26.31 68.69 0 98.35-59.85 120-116.88 126.32 9.19 7.9 17.38 23.53 17.38 47.41 0 34.22-.31 61.83-.31 70.23 0 6.85 4.61 14.81 17.6 12.31C438.72 464.97 512 369.08 512 256.02 512 114.62 397.37 0 256 0z"></path></svg>
                    <small class="d-lg-none ms-2">GitHub</small>
                </a>
            </div>
            <div class="col-6 col-md">
                <h5>${block.value[3]}</h5>
    
            </div>
            </div>
        </footer>
        </section>
        `;
};

export const templates = {
  header_recomendation,
  header_collection,
  carusel,
  side_panel,
  card,
  footer,
};
