<template>
  <header>
    <div class="head">
      <div class="head__profile">
        <img
          src="../assets/img/icon/linear/setting-4.png"
          class="head__arrow-down"
        />
        <div class="head__username">۰۹۱۵۴۰۶۴۹۸۷</div>
      </div>

      <div class="head__searchbox">
        <div class="head__left">
          <span class="head__search-fillter-text">فیلتر</span>
          <img
            src="../assets/img/icon/linear/setting-4.svg"
            class="head__fillter-button"
          />

          <div class="head__line"></div>
          <div class="head__search-fillter">ایرانی</div>
          <div class="head__search-fillter">سنتی</div>
          <div class="head__search-fillter">آواز</div>
          <div class="head__search-fillter">شاد</div>
        </div>

        <div class="head__right">
          <input type="text" class="head__search-text" placeholder="جستجو" />
          <img
            src="../assets/img/icon/linear/search-normal.svg"
            class="head__search-button"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss">
$primary-color: #fc8f22;
$secondry-color: #999999;
$background-color: #010101;

header {
  direction: ltr;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 160px;
  width: 100%;

  .head {
    width: 100%;
    height: 64px;
    margin: 0px 3%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    &__left {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    &__right {
      display: flex;
      align-items: center;
    }

    &__searchbox {
      background-color: rgba(70, 70, 70, 0.3);
      width: 80%;
      display: flex;
      height: 64px;
      justify-content: flex-end;
      align-items: center;
      justify-content: space-between;
      border-radius: 16px;
    }

    &__search-button {
      margin-right: 10px;
      width: 24px;
      height: 24px;
    }

    &__search-text {
      color: white;
      text-align: right;
      width: 100%;
      padding: 8px 16px;
      font-size: 16px;
      font-family: "Peyda";
      border: none;
      background-color: transparent;
    }

    &__search-fillter {
      border-radius: 30px;
      background-color: rgba(70, 70, 70, 0.3);
      color: #ffffff;
      padding: 5px 15px;
    }

    &__line {
      width: 2px;
      height: 24px;
      background-color: $secondry-color;
    }

    &__fillter-button {
      width: 24px;
      height: 24px;
    }

    &__search-fillter-text {
      color: #ffffff;
      margin-left: 20px;
    }

    &__profile {
      width: 300px;
      display: flex;
      justify-content: center;
      color: $primary-color;
      font-family: "Peyda";
      font-weight: 600;
      font-size: 16px;
    }

    &__arrow-down {
      margin-right: 10px;
      margin-top: 8px;
      width: 16px;
      height: 8px;
    }

    &__search-text:focus {
      border: none;
    }
  }
}
</style>