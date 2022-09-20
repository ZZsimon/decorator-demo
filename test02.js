/**
 * descriptor.value表示属性本身，log装饰器修饰了eat方法,这里就表示【eat方法】
 * 调用eat的时候，需要额外打印出日志，因此需要修改这个方法本身，也就是descriptor.value
 */
function log(target, name, descriptor) {
    // descriptor.value表示log这个方法修饰的属性值本身
    // 这里修饰了eat这个方法
    const oldValue = descriptor.value
    console.log(oldValue, 'oldValue')

    descriptor.value = function () {
        console.log(`修饰的方法：【${name}】，执行时间：${new Date()}`, 'log：输出当前属性的name和当前方法执行的时间')

        // 相当于在外面调用老的eat方法，然后返回了 老的eat方法的返回值
        // 上面的代码就是额外增加的功能
        return oldValue.apply(this, arguments);
    };
    return descriptor;
}


class Animal {
    @log
    eat() {
        console.log('eat')
    }

}

const cat = new Animal()
cat.eat() // eat