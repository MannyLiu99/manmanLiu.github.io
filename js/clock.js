var dom = document.getElementById('clock');
var ctx = dom.getContext('2d');
var width_height = 200;//canvas的边长
var width = ctx.canvas.width = width_height;
var height = ctx.canvas.height = width_height;
var r = width/2;
var rem = width/200;

function drowBlackGround(){
	ctx.save();
	//画圆形外框
	ctx.translate(r,r);//canvas默认坐标原点为左上角，该方法将坐标原点移动到坐标（r，r）上
	ctx.beginPath();
	ctx.strokeStyle = "#000";
	ctx.lineWidth = 10*rem;//线条粗为10像素
	ctx.arc(0,0,r-ctx.lineWidth/2,0,2*Math.PI,false);
	ctx.stroke();

	//写12个小时数字
	var hourNumbers = [3,4,5,6,7,8,9,10,11,12,1,2];
	ctx.font = 18*rem+'px Arial';//设置字体
	ctx.textAlign = "center";//水平方向对齐方式
	ctx.textBaseline = "middle";//垂直方向对齐方式
	hourNumbers.forEach(function(number,i){
		var rad = 2*Math.PI/12 * i;
		var x = Math.cos(rad) * (r-30*rem);
		var y = Math.sin(rad) * (r-30*rem);
		ctx.fillText(number,x,y);
	});
	
	//写60个刻度 每个刻度为一个实心圆点
	for(var i=0;i<60;i++){
		var rad = 2*Math.PI/60 * i;
		var x = Math.cos(rad) * (r-18*rem);
		var y = Math.sin(rad) * (r-18*rem);
		ctx.beginPath();
		if(i%5===0){
			ctx.fillStyle="#000";
		}else{
			ctx.fillStyle="#ccc";
		}
		ctx.arc(x,y,2*rem,0,2*Math.PI,false);
		ctx.fill();
		
	}
}
//画时针 直线
function drowHour(hour,minute){
	ctx.save();
	ctx.beginPath();
	var rad = 2*Math.PI/12 * hour;
	var mrad = 2*Math.PI/12/60 * minute;
	ctx.rotate(rad + mrad);//旋转弧度
	ctx.lineWidth = rem*6;//线条像素
	ctx.lineCap = "round";//直线结尾图形为圆形
	ctx.moveTo(0,10*rem);
	ctx.lineTo(0,-r/2);
	ctx.stroke();
	ctx.restore();
}

//画分针
function drowMinute(minute){
	ctx.save();
	ctx.beginPath();
	var rad = 2*Math.PI/60 * minute;
	ctx.rotate(rad);//旋转弧度
	ctx.lineWidth = 4*rem;//线条像素
	ctx.lineCap = "round";//直线结尾图形为圆形
	ctx.moveTo(0,10*rem);
	ctx.lineTo(0,-r/2-13*rem);
	ctx.stroke();
	ctx.restore();
}

//画秒针
function drowSecond(second){
	ctx.save();
	ctx.beginPath();
	ctx.fillStyle='#c14543';
	var rad = 2*Math.PI/60 * second;
	ctx.rotate(rad);//旋转弧度
	ctx.moveTo(-2*rem,20*rem);
	ctx.lineTo(2*rem,20*rem);
	ctx.lineTo(1,-r/2-35*rem);
	ctx.lineTo(-1,-r/2-35*rem);
	ctx.fill();
	ctx.restore();
}

//画螺丝钉
function drowDot(){
	ctx.beginPath();
	ctx.fillStyle="#fff";
	ctx.arc(0,0,2,0,2*Math.PI,false);
	ctx.fill();
}

function draw(){
	ctx.clearRect(0,0,width,height);
	var now = new Date();
	var hour = now.getHours();
	var minute = now.getMinutes();
	var second = now.getSeconds();
	drowBlackGround();
	drowDot();
	drowHour(hour,minute);
	drowMinute(minute);
	drowSecond(second);
	ctx.restore();
}
draw();
setInterval(draw,1000);

















