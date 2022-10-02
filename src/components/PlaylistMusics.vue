<template>
  <table class="music-list">
    <th class="music-list__num">#</th>
    <th class="music-list__title">عنوان</th>
    <th class="music-list__album">آلبوم</th>
    <th class="music-list__release-time">تاریخ انتشار</th>
    <th></th>
    <th></th>
    <th></th>

    <tbody>
      <tr class="music-list__row" v-for="item in musiclist" :key="item.number">
        <td class="music-list__num">{{ item.number }}</td>
        <td class="music-list__title">
          <div class="music-list__music-profile">
            <img
              src="../assets/img/profile1.jpg"
              class="music-list__pic"
              alt="MusicPoster"
            />
            <div class="music-list__artist-name">
              <span class="music-list__name">{{ item.name }}</span>
              <span class="music-list__artist">{{ item.artist }}</span>
            </div>
          </div>
        </td>
        <td class="music-list__album-name">{{ item.albumname }}</td>
        <td class="music-list__release-time">{{ item.releasetime }}</td>
        <td>
          <div class="music-list__time">{{ item.time }}</div>
        </td>
        <td>
          <img
            class="music-list__like"
            src="../assets/img/icon/linear/heart.svg"
          />
        </td>
        <td>
          <div class="music-list__btn-options" @click="showModal">
            <img
              class="music-list__options"
              src="../assets/img/icon/bold/more.svg"
            />
            <MusicOptionModal :styles="display" />
          </div>
        </td>
      </tr>

      <tr class="music-list__row">
        <td class="music-list__num--active">
          <img src="../assets/img/icon/bold/selectMusic.svg" alt="" />
        </td>
        <td class="music-list__title">
          <div class="music-list__music-profile">
            <img
              src="../assets/img/posters/Rectangle-10.png"
              class="music-list__pic"
              alt="MusicPoster"
            />
            <img
              src="../assets/img/icon/bold/pause.svg"
              alt=""
              class="music-list__pause"
            />
            <div class="music-list__artist-name">
              <span class="music-list__name--active">دستبند</span>
              <span class="music-list__artist">رهام</span>
            </div>
          </div>
        </td>
        <td class="music-list__album-name">نماهنگ</td>
        <td class="music-list__release-time">5 روز پیش</td>
        <td>
          <div class="music-list__time--active">۰۴:۴۲</div>
        </td>
        <td>
          <img
            class="music-list__like--active"
            src="../assets/img/icon/bold/heartFillYellow.svg"
          />
        </td>
        <td>
          <img
            class="music-list__options"
            src="../assets/img/icon/bold/more.svg"
          />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import MusicOptionModal from "../components/MusicOptionModal.vue";
export default {
  data() {
    return {
      display: "none",
      musiclist: [
        {
          number: "۰۱",
          image: "profile1.jpg",
          name: "دستبند",
          artist: "رهام",
          albumname: "نماهنگ",
          releasetime: "5 روز پیش",
          time: "۰۴:۴۲",
        },
        {
          number: "۰۱",
          image: "profile1.jpg",
          name: "دستبند",
          artist: "رهام",
          albumname: "نماهنگ",
          releasetime: "5 روز پیش",
          time: "۰۴:۴۲",
        },
        {
          number: "۰۱",
          image: "profile1.jpg",
          name: "دستبند",
          artist: "رهام",
          albumname: "نماهنگ",
          releasetime: "5 روز پیش",
          time: "۰۴:۴۲",
        },
        {
          number: "۰۱",
          image: "profile1.jpg",
          name: "دستبند",
          artist: "رهام",
          albumname: "نماهنگ",
          releasetime: "5 روز پیش",
          time: "۰۴:۴۲",
        },
        {
          number: "۰۱",
          image: "profile1.jpg",
          name: "دستبند",
          artist: "رهام",
          albumname: "نماهنگ",
          releasetime: "5 روز پیش",
          time: "۰۴:۴۲",
        },
      ],
    };
  },
  methods: {
    showModal() {
      if (this.display == "none") {
        this.display = "block";
      } else {
        this.display = "none";
      }
    },
  },
  components: {
    MusicOptionModal,
  },
};
</script>

<style lang="scss" src="@/assets/sass/listplaylist.scss"></style>
