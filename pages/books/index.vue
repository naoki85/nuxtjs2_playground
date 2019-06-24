<template>
  <div>
    <h1 class="siimple-h1">
      Recommended Books
    </h1>
    <div class="siimple-grid">
      <div class="siimple-grid-row">
        <div
          v-for="book in books"
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
import RecommendedBook from '../../models/RecommendedBook'
import request from '../../plugins/request'

@Component({
  async asyncData({ payload }) {
    let recommendedBooksData: Array<any> = []

    if (payload) {
      recommendedBooksData = payload
    } else {
      try {
        const response: any = await request.get('/recommended_books', {})
        response.data.RecommendedBooks.forEach((book: any) => {
          const newBook: RecommendedBook = {
            id: book.Id,
            link: book.Link,
            imageUrl: book.ImageUrl,
            buttonUrl: book.ButtonUrl
          }
          recommendedBooksData.push(newBook)
        })
      } catch (e) {
        return {
          books: []
        }
      }
    }
    return {
      books: recommendedBooksData
    }
  }
})
export default class BooksPage extends Vue {
  public books!: RecommendedBook[]

  public head() {
    return {
      title: 'オススメの本　| naoki85 のブログ',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '私が読んだ本の中でオススメの本を紹介しています。'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'オススメの本　| naoki85 のブログ'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: '私が読んだ本の中でオススメの本を紹介しています。'
        },
        {
          hid: 'twitter:card',
          property: 'twitter:card',
          content: 'summary'
        }
      ]
    }
  }
}
</script>

<style scoped>
.recommend-book img {
  width: 100%;
  max-width: 150px;
}
</style>
