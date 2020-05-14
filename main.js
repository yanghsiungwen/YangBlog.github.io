let flag = true
$('.bg').on('click', function () {
    if (flag) {
        $('.table').animate({
            top: -100 + 'vh'
        }, 500)
        $('.window>img').animate({
            width: 90 + '%',
            height: 90 + '%',
            left: 5 + '%'
        }, 500)
    }
    flag = false
})

$('.container').on('click', () => {
    if (!flag) {
        $('.table').animate({
            top: 0 + 'vh'
        }, 500)
        $('.window>img').animate({
            width: 100 + '%',
            height: 100 + '%',
            left: 0
        }, 500)
    }
    flag = true
})

timer()
setInterval(timer, 1000)

function timer() {
    let time = new Date()
    let hh = (time.getHours() + '').padStart(2, '0')
    let mm = (time.getMinutes() + '').padStart(2, '0')

    let y = time.getFullYear()
    let m = (time.getMonth() + 1 + '').padStart(2, '0')
    let d = (time.getDate() + '').padStart(2, '0')

    $('.bg>h1').html(hh + ':' + mm)
    $('.bg>p').html(y + '年' + m + '月' + d + '日')
}