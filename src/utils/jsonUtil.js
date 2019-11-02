
const jsonFormat = {
  kv: function(json) {
    let str = "";
    for (let x in json) {
      let v = json[x];
      if (v == "" || v == null || v == undefined) {
        continue;
      }
      str += x + "=" + v + "&";
    }
    str = str.substring(0, str.length - 1);
    return str;
  },
  formData: function(json) {
    let fd = new FormData();
    for (let x in json) {
      let v = json[x];
      let type = typeof v;
      if (type == 'object') {
        if (!v) {
          continue;
        }
      } else {
        if (v == "" || v == null || v == undefined) {
          continue;
        }
      }
      fd.append(x, json[x]);
    }
    return fd;
  }
};

export default jsonFormat;
