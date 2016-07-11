
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style type="text/css">
    *{
    margin:0 auto;
    padding:0;
    }
   body {
  font: 0.875em/1.4 Microsoft Yahei, 微软雅黑;
  *font-size: small;
  word-wrap: break-word;
  margin: 0 auto;
  -webkit-text-size-adjust: none;
  color: #333333;
  height: 100%;
}
      #c{
        width:70%;
        height:70%;
        margin:10%  auto 0;
        background:#fcfcfc;
        border:1px solid #0cf;
      }
      #c span{
      display:inline-block;
      width:100px;
      height:60px;
      line-height:60px;
      font-size:16px;
      color:#333;
      }
      dl{
      width:96%;
      height:auto;
      min-height:40px;
      padding:2%;
      }
      dl:nth-child(odd){
      background:#E9F4F9;
      }
      dl:nth-child(even){
      background:#E0F0F5;
      }
      dt{
      width:40%;
      float:left;
      height:40px;
      line-height:40px;
      }
      dd{
      float:left;
      height:40px;
      line-height:40px;
      width:15%;
      }
    </style>
</head>
<body>
<div id="c">
    <div data-reactroot="">
    <span>对(2)</span>
    <span>错(2)</span>
        <dl data-status="1" data-v="3">
            <dt>1、abc</dt>
            <dd>
                <input type="radio" name="a" value="1">
                选项1
                </dd>
            <dd>
                <input type="radio" name="a" value="2">
                选项2
                </dd>
            <dd>
                <input type="radio" name="a" value="3">
                    选项3
                </dd></dl>
        <dl data-status="1" data-v="3">
            <dt>2、abc</dt>
            <dd>
                <input type="radio" name="b" value="1">
                    选项1
                </dd>
            <dd>
                <input type="radio" name="b" value="2">
                    选项2
                </dd>
            <dd>
                <input type="radio" name="b" value="3">
                    选项3
                </dd></dl>
        <dl data-status="2" data-v="3">
            <dt>3、abc</dt>
            <dd>
                <input type="radio" name="c" value="1">
                    选项1
                </dd>
            <dd>
                <input type="radio" name="c" value="2">
                    选项2
                </dd>
            <dd>
                <input type="radio" name="c" value="3">
                    选项3
                </dd></dl>
        <dl data-status="2" data-v="3">
            <dt>4、abc</dt>
            <dd>
                <input type="radio" name="d" value="1">
                    选项1
                </dd>
            <dd>
                <input type="radio" name="d" value="2">
                    选项2
                </dd>
            <dd>
                <input type="radio" name="d" value="3">
                    选项3
                </dd></dl>
    </div>
</div>
</body>
</html>
