<template>
  <div>
    <nav-top :curM="true"></nav-top>
    <b-container fluid="xl" >
          <b-row no-gutters>
            <b-col sm="4" class="p-1" v-for="col in provisional">
                <message-card
                    v-for="message in col"
                    :imgUrl="message.img"
                    :text="message.text"
                    :userName="message.userName"
                    :go="message.go"
                ></message-card>
            </b-col>
          </b-row>

    </b-container>
  </div>
</template>

<script>
import messageCard from './common/messageCard.vue';
export default {
    components:{
    messageCard
  },
  data() {
    return {
        provisional:[
            [
                {
                    text:'我们乘着时代的风云，以微毫诠释盛大,且歌且舞而来。我们曼妙风姿里，就是生命。我们轻盈飞过处，就是天空。',
                    userName:'123',
                    img:'https://images.pexels.com/photos/15737949/pexels-photo-15737949.jpeg?auto=compress&cs=tinysrgb&h=350',
                    go:{
                        text:'我们乘着时代的风云，以微毫诠释盛大,且歌且舞而来。我们曼妙风姿里，就是生命。我们轻盈飞过处，就是天空。',
                        userName:'123',
                        img:'https://images.pexels.com/photos/15737949/pexels-photo-15737949.jpeg',
                    }
                }
                
            ],
            [
                {
                    text:'初见乍惊欢，久处亦怦然。',
                    userName:'122',
                    img:'https://images.pexels.com/photos/15647839/pexels-photo-15647839.jpeg?auto=compress&cs=tinysrgb&h=350',
                    go:{
                        text:'初见乍惊欢，久处亦怦然。',
                        userName:'122',
                        img:'https://images.pexels.com/photos/15647839/pexels-photo-15647839.jpeg',
                    }
                }
                
            ],
            [
                {
                    text:'阳春布德泽，万物生光辉”，希望之光照亮了生命。胸怀希望，才能走出“飘如陌上尘”“天地一沙鸥”的慨叹，“今朝试卷孤篷看，依旧青山绿树多”。拥有希望，你就能打开更多的窗户，“雁引愁心去，山衔好月来。”无论面对怎样的艰难，我们“依然一笑作春温”。',
                    userName:'121',
                    img:'https://images.pexels.com/photos/15591332/pexels-photo-15591332.jpeg?auto=compress&cs=tinysrgb&h=350',
                    go:{
                        text:'阳春布德泽，万物生光辉”，希望之光照亮了生命。胸怀希望，才能走出“飘如陌上尘”“天地一沙鸥”的慨叹，“今朝试卷孤篷看，依旧青山绿树多”。拥有希望，你就能打开更多的窗户，“雁引愁心去，山衔好月来。”无论面对怎样的艰难，我们“依然一笑作春温”。。',
                        userName:'121',
                        img:'https://images.pexels.com/photos/15591332/pexels-photo-15591332.jpeg',
                    }
                }
                
            ]
        ]
    }
  },
methods: {

  },
mounted(){

  }
}
</script>

<style scoped>

</style>
