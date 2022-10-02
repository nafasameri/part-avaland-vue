<template>
  <div class="music-info">
    <div class="music-info__title">اطلاعات آهنگ</div>
    <div class="music-info__content">
      <form action="" class="music-info__form">
        <div class="row">
          <div class="col">
            <div class="form-group">
              <label for="name" class="music-info__label">نام آهنگ</label>
              <input
                type="text"
                id="name"
                name="name"
                class="music-info__input"
                value="اشارات"
              />
            </div>
            <div class="form-group">
              <label for="artist" class="music-info__label">نام خواننده</label>
              <input
                type="text"
                id="artist"
                name="artist"
                class="music-info__input"
                value="محمدرضا شجریان و همایون شجریان"
              />
            </div>
          </div>
          <div class="col">
            <div class="form-group">
              <label for="album" class="music-info__label">نام آلبوم</label>
              <input
                type="text"
                id="album"
                name="album"
                class="music-info__input"
                value="اشارات"
              />
            </div>

            <div class="form-group">
              <label for="duration" class="music-info__label"
                >مدت زمان آهنگ</label
              >
              <input
                type="text"
                id="duration"
                name="duration"
                class="music-info__input"
                value="۰۹:۰۰"
              />
            </div>
          </div>

          <div class="col">
            <div class="form-group browse-button">
              <!-- <label for="poster" class="music-info__label">بارگذاری عکس</label> -->
              <img src="../assets/img/browse.png" alt="" id="loadPoster" />
              <div class="music-info__desc-browse">
                <img
                  src="../assets/img/icon/linear/Camera.png"
                  alt=""
                  id="cameraIcon"
                />
                <button
                  class="poster"
                  onclick="document.getElementById('poster').click()"
                >
                  بارگذاری عکس
                </button>
                <input type="file" id="poster" name="poster" />
              </div>
            </div>
          </div>
        </div>

        <div class="form-group">
          <label for="lyric" class="music-info__label">متن آهنگ</label>
          <textarea
            type="text"
            id="lyric"
            name="lyric"
            class="music-info__input"
          >
لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
          </textarea>
        </div>

        <div class="buttons-action">
          <input type="button" class="btn-active" value="ذخیره تغییرات" />
          <input type="button" class="btn-disable" value="لغو" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" src="@/assets/sass/upload.scss"></style>