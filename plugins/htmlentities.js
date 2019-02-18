import Vue from "vue";
import { XmlEntities } from "html-entities";

console.log("test");

Vue.filter("htmlentities", function(value) {
  const entities = new XmlEntities();

  return entities.encode(value);
});
