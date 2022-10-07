<template>
  <header>
    <div class="head">
      <div class="head__profile">
        <img
          src="../assets/img/icon/linear/setting-4.png"
          class="head__arrow-down"
        />
        <div class="head__username">
          <router-link to="/login">
          ۰۹۱۵۴۰۶۴۹۸۷
          </router-link>
          </div>
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

<style lang="scss" src="@/assets/sass/main.scss" scoped></style>