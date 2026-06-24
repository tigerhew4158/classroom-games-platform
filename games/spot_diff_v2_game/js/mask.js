async function extractMaskRegions(maskSrc){
  const img=await dataUrlToImage(maskSrc);
  const canvas=document.createElement('canvas');
  canvas.width=img.width;canvas.height=img.height;
  const ctx=canvas.getContext('2d',{willReadFrequently:true});
  ctx.drawImage(img,0,0);
  const {data,width,height}=ctx.getImageData(0,0,canvas.width,canvas.height);
  const redMask=new Uint8Array(width*height);
  for(let i=0;i<width*height;i++){
    const r=data[i*4],g=data[i*4+1],b=data[i*4+2],a=data[i*4+3];
    if(a>50&&r>180&&g<110&&b<110)redMask[i]=1;
  }
  const visited=new Uint8Array(width*height);
  const regionMap=new Int32Array(width*height).fill(-1);
  const regions=[];
  const dirs=[[1,0],[-1,0],[0,1],[0,-1]];
  for(let y=0;y<height;y++)for(let x=0;x<width;x++){
    const idx=y*width+x;
    if(!redMask[idx]||visited[idx])continue;
    const queue=[idx],pixels=[];visited[idx]=1;
    let q=0,minX=x,maxX=x,minY=y,maxY=y,count=0;
    while(q<queue.length){
      const cur=queue[q++],cx=cur%width,cy=Math.floor(cur/width);
      pixels.push(cur);count++;
      if(cx<minX)minX=cx;if(cx>maxX)maxX=cx;if(cy<minY)minY=cy;if(cy>maxY)maxY=cy;
      for(const [dx,dy] of dirs){
        const nx=cx+dx,ny=cy+dy;
        if(nx<0||ny<0||nx>=width||ny>=height)continue;
        const nidx=ny*width+nx;
        if(redMask[nidx]&&!visited[nidx]){visited[nidx]=1;queue.push(nidx)}
      }
    }
    if(count>=20){
      const id=regions.length;
      pixels.forEach(p=>regionMap[p]=id);
      regions.push({id,minX,minY,maxX,maxY,count});
    }
  }
  return{width,height,regions,regionMap};
}
function getMaskHitInfo(maskInfo,x,y,displayWidth,displayHeight){
  if(!maskInfo||!maskInfo.width||!maskInfo.height||!displayWidth||!displayHeight)return{hit:false,regionId:-1,realX:0,realY:0};
  const realX=Math.max(0,Math.min(maskInfo.width-1,Math.floor(x*(maskInfo.width/displayWidth))));
  const realY=Math.max(0,Math.min(maskInfo.height-1,Math.floor(y*(maskInfo.height/displayHeight))));
  const regionId=maskInfo.regionMap[realY*maskInfo.width+realX];
  return{hit:regionId>=0,regionId,realX,realY};
}
