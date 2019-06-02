<template>
  <div v-if="!isError">
    <h3 class="siimple-h3">
      Recently read
    </h3>
    <div class="siimple-grid">
      <div class="siimple-grid-row">
        <div
          v-for="book in recommendedBooks"
          :key="book.id"
          class="siimple-grid-col siimple-grid-col--2 siimple-grid-col--md-3 recommend-book"
        >
          <a target="_blank" :href="book.link">
            <img border="0" :src="book.imageUrl" />
          </a>
          <img
            :src="book.buttonUrl"
            width="1"
            height="1"
            border="0"
            alt=""
            style="border:none !important; margin:0px !important;"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import RecommendedBook from '../models/RecommendedBook'
declare function require(x: string): any
const Request = require('../assets/javascript/request.js').default

@Component
export default class RecommendBooks extends Vue {
  recommendedBooks: RecommendedBook[] = []
  isError: bool = false

  public mounted(): void {
    this.fetchRecommededBooks()
  }

  public fetchRecommededBooks(): void {
    Request.get('/recommended_books', {})
      .then((response: any) => {
        this.recommendedBooks = []
        response.data.RecommendedBooks.forEach((book: any) => {
          const newBook: RecommendedBook = {
            id: book.Id,
            link: book.Link,
            imageUrl: book.ImageUrl,
            buttonUrl: book.ButtonUrl
          }
          this.recommendedBooks.push(newBook)
        })
      })
      .catch(() => {
        this.isError = true
      })
  }
}
</script>

<style scoped>
.recommend-book img {
  width: 100%;
  max-width: 150px;
}
</style>
