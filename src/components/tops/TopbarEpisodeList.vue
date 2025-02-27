<template>
<div :class="{
  'topbar-menuitem': true,
  'topbar-menuitem-open': showEpisodeList
}">
  <div
    class="episode-menu"
  >
    <div
      class="flexrow unselectable root-menu"
      @click="toggleEpisodeList"
    >
      <div
        class="selected-production-line flexrow-item"
      >
        {{ episodeLabel }}
      </div>
      <chevron-down-icon class="down-icon flexrow-item"/>
    </div>
    <div
      class="select-input"
      ref="select"
      v-if="showEpisodeList"
    >
      <div
        :ref="'episode-' + episode.value"
        class="episode-line"
        v-for="episode in episodeList"
        @click="selectEpisode(episode)"
        :key="episode.value"
      >
        <router-link
          :to="getEpisodePath(episode.value)"
        >
          {{ episode.label }}
        </router-link>
      </div>
    </div>
  </div>
  <combobox-mask
    :displayed="showEpisodeList"
    @click="toggleEpisodeList"
  />
</div>

</template>

<script>
import { mapGetters } from 'vuex'
import { ChevronDownIcon } from 'vue-feather-icons'

import { getProductionPath } from '@/lib/path'

import ComboboxMask from '@/components/widgets/ComboboxMask'

export default {
  name: 'topbar-episode-menu',

  components: {
    ChevronDownIcon,
    ComboboxMask
  },

  data () {
    return {
      lastScrollPosition: 0,
      showEpisodeList: false
    }
  },

  props: {
    episodeList: {
      required: true,
      type: Array
    },
    section: {
    },
    episodeId: {
      default: '',
      type: String
    }
  },

  mounted () {
  },

  computed: {
    ...mapGetters([
      'episodeMap',
      'currentProduction'
    ]),

    episodeLabel () {
      const option = this.episodeList.find(o => o.value === this.episodeId)
      return option ? option.label : ''
    },

    getEpisodePath () {
      const currentProduction = this.currentProduction
      const section = this.section
      return (episodeId) => {
        const path = getProductionPath(
          currentProduction,
          section,
          episodeId
        )
        return path
      }
    }
  },

  methods: {
    selectEpisode (episode) {
      this.$emit('input', episode.id)
      this.showEpisodeList = false
    },

    toggleEpisodeList () {
      if (this.showEpisodeList) {
        this.lastScrollPosition = this.$refs.select.scrollTop
      }
      this.showEpisodeList = !this.showEpisodeList
      if (this.showEpisodeList) {
        this.$nextTick(() => {
          this.$refs.select.scrollTo({ top: this.lastScrollPosition, left: 0 })
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.dark {
  .select-input,
  .selected-episode-line,
  .episode-line,
  .episode-combo {
    background: $black;
    border-color: $dark-grey;
  }

  .select-input,
  .topbar-menuitem {
    border: 1px solid $dark-grey-light;
  }

  .episode-line {
    a {
      color: $white;
    }
  }

  .episode-line:hover {
    background: $dark-purple;
  }
}

.episode-combo {
  background: $white;
  min-width: 300px;
  width: 300px;
  border: 1px solid $light-grey-light;
  user-select: none;
  cursor: pointer;
  border-radius: 3px;
  margin: 0;
  padding: 0.15em;
  position: relative;
}

.selected-episode-line {
  background: $white;
  padding: 0.4em;
  flex: 1;
  cursor: pointer;
}

.episode-menu {
  cursor: pointer;
}

.episode-line {
  background: $white;
  cursor: pointer;
  margin: 0;
  border-radius: 5px;
  margin-right: 10px;

  a {
    color: $black;
    padding: 0.5em ;
    padding-right: 0.8em;
    display: inline-block;
    width: 100%;
  }

  &:hover {
    background: #EEE;
  }
}

.down-icon {
  width: 15px;
  min-width: 15px;
  margin-right: 0.4em;
  color: $green;
  cursor: pointer;
}

.select-input {
  background: $white;
  position: absolute;
  border: 1px solid $light-grey-light;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  text-align: left;
  margin-left: -11px;
  max-height: 400px;
  min-width: 120px;
  overflow-y: auto;
  padding: 5px;
  padding-bottom: 10px;
  top: 49px;
  z-index: 300;
}

.root-menu {
}

.topbar-menuitem {
  height: 42px;
  border: 1px solid $light-grey-light;
  padding-top: 7px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 10px;

  &.topbar-menuitem-open {
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }
}
</style>
