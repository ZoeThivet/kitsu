<template>
<a
  class="thumbnail-wrapper thumbnail-picture"
  target="_blank"
  :style="{
    width: emptyWidth + 'px',
    'min-width': emptyWidth + 'px',
    height: emptyHeight + 'px',
  }"
  @click="onClicked"
  v-if="isPreview && withLink"
>
  <img
    class="thumbnail-picture"
    :style="imgStyle"
    :width="width || ''"
    v-lazy="thumbnailPath"
    :key="thumbnailKey"
  />
</a>

<img
  :key="thumbnailKey"
  class="thumbnail-picture"
  style="imgStyle"
  :width="width || ''"
  v-lazy="thumbnailPath"
  v-else-if="isPreview && !withLink"
/>

<span
  :class="{
    'thumbnail-picture': true,
    'thumbnail-empty': true,
    square: square
  }"
  :style="{
    width: emptyWidth + 'px',
    height: emptyHeight + 'px',
  }"
  v-else>
</span>
</template>

<script>
export default {
  name: 'entity-thumbnail',

  props: {
    entity: {
      default: () => {},
      type: Object
    },
    square: {
      default: false,
      type: Boolean
    },
    width: {
      default: null,
      type: Number
    },
    height: {
      default: null,
      type: Number
    },
    maxWidth: {
      default: null,
      type: Number
    },
    maxHeight: {
      default: null,
      type: Number
    },
    noPreview: {
      default: false,
      type: Boolean
    },
    emptyHeight: {
      default: 30,
      type: Number
    },
    emptyWidth: {
      default: 50,
      type: Number
    },
    previewFileId: {
      default: null,
      type: String
    },
    withLink: {
      default: true,
      type: Boolean
    }
  },

  computed: {
    originalPath () {
      const previewFileId = this.previewFileId || this.entity.preview_file_id
      return '/api/pictures/originals/preview-files/' + previewFileId + '.png'
    },

    isPreview () {
      const previewFileId = this.previewFileId || this.entity.preview_file_id
      return previewFileId && previewFileId.length > 0
    },

    imgStyle () {
      const style = {}
      if (this.maxWidth) {
        style['max-width'] = this.maxWidth + 'px'
      } else if (this.width) {
        style.width = this.width + 'px'
        style['min-width'] = this.width + 'px'
      }
      if (this.maxHeight) {
        style['max-height'] = this.maxHeight + 'px'
      } else if (this.height) {
        style.height = this.height + 'px'
      }
      return style
    },

    thumbnailPath () {
      const previewFileId = this.previewFileId || this.entity.preview_file_id

      if (this.square) {
        return '/api/pictures/thumbnails-square/preview-files/' +
               previewFileId + '.png'
      } else {
        return '/api/pictures/thumbnails/preview-files/' +
               previewFileId + '.png'
      }
    },

    thumbnailKey () {
      const previewFileId = this.previewFileId || this.entity.preview_file_id
      return `thumbnail-${previewFileId}`
    }
  },

  methods: {
    onClicked () {
      if (this.noPreview) return
      const previewFileId = this.previewFileId || this.entity.preview_file_id
      this.$store.commit('SHOW_PREVIEW_FILE', previewFileId)
    }
  }
}
</script>

<style lang="scss" scoped>
.dark {
  .thumbnail-picture {
    background-color: $dark-grey-lighter;
    border-color: $dark-grey-light;
  }

  table .thumbnail-picture.thumbnail-empty {
    background: $dark-grey-lighter;
    border-color: $dark-grey-light;
  }
}

.thumbnail-picture {
  border-radius: 4px;
  margin: 0;
}

span.thumbnail-empty {
  background: $white-grey;
  display: block;
  margin: 0;
}

.thumbnail-picture.square {
  width: 100px;
  height: 100px;
}

table .thumbnail-picture.thumbnail-empty {
  background: $white-grey;
  border: 1px solid $light-grey;
  margin: 0px;
}

table .thumbnail-picture {
  background: black;
  border: 1px solid black;
  margin: 0px;
  padding: 0px;
}

.thumbnail-wrapper {
  padding: 0px;
  border: 0;
  border-radius: 4px;
  display: inline-block;
}
</style>
