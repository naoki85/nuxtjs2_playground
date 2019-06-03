<template>
  <div v-if="totalPage > 0" class="siimple--text-center">
    <ul class="paginate">
      <li @click="emitClickPage(currentPage - 1)">
        <i class="fas fa-chevron-left" />
      </li>
      <li
        v-for="page in displayPages"
        :key="page"
        :class="isCurrent(page)"
        @click="emitClickPage(page)"
      >
        {{ page }}
      </li>
      <li @click="emitClickPage(currentPage + 1)">
        <i class="fas fa-chevron-right" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator'

@Component
export default class Paginate extends Vue {
  @Prop({ type: Number })
  currentPage: Number = 1
  @Prop({ type: Number })
  totalPage: Number = 0

  @Emit()
  clickPage(page: number) {}

  public get displayPages(): number {
    if (this.totalPage && this.totalPage <= 5) {
      return this.totalPage
    }
    if (this.currentPage - 3 <= 0) {
      return 5
    }
    const tmpPages: array = []
    const iterater: array = [-2, -1, 0, 1, 2]
    iterater.forEach(i => {
      const tmpPage = this.currentPage + i
      if (tmpPage > this.totalPage) {
        return true
      }
      tmpPages.push(tmpPage)
    })
    return tmpPages
  }

  public isCurrent(page: number): bool {
    const defaultClass: string = 'page-' + page
    return page === this.currentPage ? defaultClass + ' current' : defaultClass
  }

  public emitClickPage(page: number): void {
    this.clickPage(page)
  }
  public updateCurrent(page: number): void {
    const currentClassElements: array = document.getElementsByClassName(
      'current'
    )
    if (currentClassElements.length > 0) {
      currentClassElements[0].classList.remove('current')
      document
        .getElementsByClassName('page-' + page)[0]
        .classList.add('current')
    }
  }
}
</script>

<style scoped>
li {
  list-style: none;
  font-weight: bold;
}
.paginate {
  display: inline-flex;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  padding: 9px 8px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
}
.paginate li {
  display: block;
  color: #5ea25a;
  text-decoration: none;
  padding: 9px 12px;
  margin-right: 6px;
  border-radius: 16px;
  background: #fff;
  -webkit-transition: all 0.3s linear;
  -moz-transition: all 0.3s linear;
  transition: all 0.3s linear;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
}
.paginate li:hover {
  color: #4f664e;
  background: #c9dec8;
}
.paginate li.current {
  background: #009688;
  color: #fff;
}
</style>
