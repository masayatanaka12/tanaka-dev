// Task d

const axios = require('axios');

let url = 'https://68538eb0a1fdf0c1fbebebcce74e91e0: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@tanakadev.myshopify.com/admin/api/2021-10/products/7488738197759/metafields.json';

async function myMetaField(){
  await axios
      .get(url)
      .then(res => {
        if(res.data.metafields){
          value = 0;
          console.log(value);
        }else{
          value = res.data.metafields.value;
          console.log(value);
          value += 1;
        };
      })

      axios
        .post(url,
        {
        "metafield": {
        "namespace": "global",
        "key": "test",
        "value": value,
        "value_type": "integer"
        }
        })
        .then(res => console.log("ok"));
}

myMetaField();
