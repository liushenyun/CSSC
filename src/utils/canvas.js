export const drawBackground = (canvasConfig) => {
  console.log('canvasConfig', canvasConfig)
  const { ctx, canvasWeight, canvasHeight } = canvasConfig;
  let gridW = 3; // 设置方格间隔
  let timeY = Math.floor(canvasHeight / (gridW + 1)); // Y轴方向的次数
  let timeX = Math.floor(canvasWeight / (gridW + 1)); // X轴方向的次数
  ctx.beginPath();
  for (let i = 0; i < timeY; i++) {
    ctx.moveTo(0, (i + 1) * (gridW + 1));
    ctx.lineTo(canvasWeight, (i + 1) * (gridW + 1));
  }
  for (let j = 0; j < timeX; j++) {
    ctx.moveTo((j + 1) * (gridW + 1), 0);
    ctx.lineTo((j + 1) * (gridW + 1), canvasHeight);
  }
  ctx.closePath();
  ctx.setStrokeStyle('#F6F6F6');
  ctx.stroke();
  ctx.draw(true);
}

// 画点
export const drawPoint = (canvasConfig, params) => {
  const { ctx, _scrollDistance_ } = canvasConfig;
  let arr = params;
  ctx.save();
  // if (_scrollDistance_ && _scrollDistance_ != 0) {
  //   ctx.translate(_scrollDistance_, 0)
  // }
  for (let i = 0; i < arr.length; i++) {
    const { r, offSetX, offSetY, color } = arr[i];
    ctx.beginPath();
    ctx.arc(
      (offSetX + r),
      (offSetY + r),
      r,
      0,
      2 * Math.PI
    );
    ctx.setFillStyle(color);
    ctx.fill();
    ctx.closePath();
  }
  ctx.restore();
  ctx.draw(true);
}

// 画圆

export const drawArc = (canvasConfig, params) => {
  const { ctx } = canvasConfig;
  let arr = params;
  for (let i = 0; i < arr.length; i++) {
    const { r, offSetX, offSetY, color, lineWidth, sAngle, eAngle } = arr[i];
    ctx.beginPath();
    ctx.arc(
      (offSetX + r),
      (offSetY + r),
      r - lineWidth / 2,
      sAngle * Math.PI,
      eAngle * Math.PI
    );
    ctx.setStrokeStyle(color);
    ctx.setLineWidth(lineWidth);
    ctx.setLineCap('round');
    ctx.stroke();
    ctx.closePath();
  }
  ctx.draw(true);
}

export const drawWord = (canvasConfig, params) => {
  const { ctx } = canvasConfig;
  const { text, offSetX, offSetY, fontSize = 24, color = '#4A4A4A' } = params
  ctx.beginPath();
  ctx.setFontSize(fontSize);
  ctx.setFillStyle(color);
  ctx.fillText(text, offSetX, offSetY);
  ctx.closePath();
  ctx.stroke();
  ctx.draw(true);
}

export const drawWordCenter = (canvasConfig, params) => {
  console.log('canvasConfig, params', canvasConfig, params)
  const { ctx, fitRatio } = canvasConfig;
  const { text, fWidth, fHeight, isVcenter, isHcenter, offSetX, offSetY, fontSize = 24, color = '#4A4A4A' } = params
  ctx.beginPath();
  ctx.setFontSize(fontSize);
  ctx.setFillStyle(color);
  const metrics = ctx.measureText(text).width;
  if (isVcenter && isHcenter) { // 竖直居中 且 水平居中
    console.log('竖直居中 且 水平居中')
    ctx.fillText(text, (fWidth - metrics) / 2, (fHeight - fontSize * fitRatio) / 2);
  } else if (isVcenter && !isHcenter) { // 竖直居中 且 水平不居中
    console.log('竖直居中 且 水平不居中')
    ctx.fillText(text, offSetX, (fHeight - fontSize * fitRatio) / 2);
  } else if (!isVcenter && isHcenter) { // 竖直不居中 且 水平居中
    console.log('竖直不居中 且 水平居中', offSetY)
    ctx.fillText(text, (fWidth - metrics) / 2, offSetY);
  } else {
    ctx.fillText(text, offSetX, offSetY);
  }
  ctx.closePath();
  ctx.stroke();
  ctx.draw(true);
}

// 画竖线
export const drawVerticalLine = (canvasConfig, params) => {
  const { ctx, fitRatio } = canvasConfig;
  let arr = params;
  ctx.save();
  ctx.beginPath();
  for (let i = 0; i < arr.length; i++) {
    const {
      startLeft,
      startTop,
      lineWidth = 1,
      lineHight,
      lineColor = '#B8B8B8',
      bottomText
    } = arr[i];
    ctx.moveTo(startLeft, startTop + lineHight);
    ctx.lineTo(startLeft, startTop);
    ctx.setLineWidth(lineWidth);
    ctx.setStrokeStyle(lineColor);
    if (bottomText) {
      ctx.setFillStyle(lineColor);
      ctx.setFontSize(24 * fitRatio);
      const metrics = ctx.measureText(bottomText).width;
      ctx.fillText(
        bottomText,
        startLeft - metrics / 2,
        startTop + lineHight + 5 + 12
      );
    }
  }
  ctx.closePath();
  ctx.stroke();
  ctx.restore();
  ctx.draw(true);
}

// 画横线
export const drawHorizontalLine = (canvasConfig, params) => {
  const { ctx, fitRatio } = canvasConfig;
  const arr = params;
  ctx.save();
  for (let i = 0; i < arr.length; i++) {
    ctx.beginPath();
    const {
      startLeft,
      startTop,
      lineWidth,
      textSize,
      lineHight,
      lineColor = '#B8B8B8',
      leftText
    } = arr[i];
    ctx.moveTo(startLeft + lineWidth, startTop);
    ctx.lineTo(startLeft, startTop);
    ctx.setStrokeStyle(lineColor);
    ctx.setLineDash([4, 4], 6);
    ctx.setLineWidth(lineHight);
    if (leftText) {
      ctx.setFillStyle(lineColor);
      ctx.setFontSize(textSize);
      const metrics = ctx.measureText(leftText).width;
      ctx.fillText(leftText, 30 * fitRatio, startTop + textSize / 2);
    }
    ctx.closePath();
    ctx.stroke();
  }
  ctx.restore();
  ctx.draw(true);
}

export const drawImage = (canvasConfig, params) => {
  const { ctx } = canvasConfig;
  const { path, dx, dy, dWidth, dHeight } = params
  console.log('params-image', params)
  ctx.drawImage(path, dx, dy, dWidth, dHeight);
  ctx.draw(true);
}

export const drawReactCover = (canvasConfig, params) => {
  console.log('canvasConfig, params', canvasConfig, params)
  const { ctx } = canvasConfig;
  const { x, y, width, height } = params;
  ctx.beginPath();
  ctx.strokeRect(x, y, width, height)
  ctx.rect(x, y, width, height)
  ctx.setFillStyle('#FFF')
  ctx.fill()
  ctx.closePath();
  ctx.draw(true)
}
