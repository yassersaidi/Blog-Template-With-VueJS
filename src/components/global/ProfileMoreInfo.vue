<template>
    <div class="profileInfo">
        <div class="card position-relative" >
            <div class="card-body text-center">
                <h4 class="card-title"><i class="fa fa-info-circle"></i> More Information</h4>
                <table class="table">
                    <tr>
                        <td class="text-left"><i class="fa fa-male" style="color:#FF5722"></i>&nbsp;Gender</td>
                        <td class="text-right">{{ gender }}</td>
                    </tr>
                    <tr>
                        <td class="text-left"><i class="fa fa-street-view" style="color:#FF5722"></i>&nbsp;Address</td>
                        <td class="text-right">{{ addres }}</td>
                    </tr>
                    <tr>
                        <td class="text-left"><i class="fa fa-user-graduate" style="color:#8BC34A"></i>&nbsp;Job</td>
                        <td class="text-right">{{ job }}</td>
                    </tr>
                    <tr>
                        <td class="text-left"><i class="fa fa-envelope" style="color:#FFEB3B"></i>&nbsp;Email</td>
                        <td class="text-right">{{ email }}</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:["gender","addres","job","email"],
    name:"profile_more_info"
}
</script>

<style lang="scss" scoped>
</style>