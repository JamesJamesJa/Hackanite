<template>
    <v-container fluid>
        <v-card class="mt-12">
        <v-row>
            <v-col cols="2"></v-col>
            <v-col cols="8">
                <v-container class="mt-12">
                    <v-card
                    >

                    <v-row><v-col cols="12"></v-col></v-row>
                    <v-row>
                        <v-col cols="2"></v-col>
                        <v-col cols="8"><h2>Register</h2></v-col>
                        <v-col cols="2"></v-col>
                    </v-row>

                    <v-row><v-col cols="12"></v-col></v-row>
                    <v-row><v-col cols="12"></v-col></v-row>
                    <v-row><v-col cols="12"></v-col></v-row>

                    <!-- <v-row>
                        <v-col cols="2"></v-col>
                        <v-col cols="4">
                            <v-text-field
                            v-model="registerInfo.username"
                            label="Username"
                            :rules="[rules.required]"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="4">
                            <v-text-field
                            v-model="registerInfo.password"
                            label="Password"
                            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                            :rules="[rules.required, rules.min]"
                            hint="At least 8 characters"
                            @click:append="show1 = !show1"
                            :type="show1 ? 'text' : 'password'"
                            name="input-10-1"
                            counter
                            ></v-text-field>
                        </v-col>
                        <v-col cols="2"></v-col>
                    </v-row> -->
                    

                    <v-row>
                        <v-col cols="2"></v-col>
                        <v-col cols="4">
                            <v-text-field
                            v-model="registerInfo.firstname"
                            label="Firstname"
                            :rules="[rules.required]"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="4">
                            <v-text-field
                            v-model="registerInfo.lastname"
                            label="Lastname"
                            :rules="[rules.required]"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="2"></v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="2"></v-col>
                        <v-col cols="4">
                            <v-text-field
                                v-model="registerInfo.email"
                                :rules="emailRules"
                                label="E-mail"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="4">
                            <v-text-field
                            v-model="registerInfo.phoneNumber"
                            label="Phone Number"
                            :rules="[rules.required, rules.lengthTen]"
                            counter="10"
                            type="number"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="2"></v-col>
                    </v-row>

                    <!-- <v-row>
                        <v-col cols="2"></v-col>
                        <v-col cols="4">
                            <v-text-field
                            v-model="registerInfo.citizenid"
                            label="Citizen ID"
                            :rules="[rules.required, rules.lengthThirteen]"
                            counter="13"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="4">
                            <v-text-field
                            v-model="registerInfo.phoneNumber"
                            label="Phone Number"
                            :rules="[rules.required, rules.lengthTen]"
                            counter="10"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="2"></v-col>
                    </v-row> -->




                    <!-- <v-row>
                        <v-col cols="2"></v-col>
                        <v-col cols="4">
                            <v-file-input
                                v-model="registerInfo.img"
                                :rules="imgRules"
                                accept="image/png, image/jpeg, image/bmp"
                                placeholder="Pick an avatar"
                                prepend-icon="mdi-camera"
                                label="Avatar"
                            ></v-file-input>
                        </v-col>
                        <v-col cols="1">
                            <v-text-field
                            v-model="registerInfo.age"
                            label="Age"
                            :rules="[rules.required]"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="3">
                            <v-select
                                v-model="registerInfo.gender"
                                :items="genders"
                                :rules="[rules.required]"
                                label="Gender"

                            ></v-select>
                        </v-col>
                        
                        <v-col cols="2"></v-col>
                    </v-row> -->

                    

                    <v-row>
                        <v-col cols="3"></v-col>
                        <v-col cols="1">
                            <v-btn
                            
                            >PREVIOUS</v-btn>
                        </v-col>
                        <v-col cols="3"></v-col>
                        <v-col cols="1">
                            <v-btn
                            color="#98B9F9"
                            :disabled="getDisabled"
                            @click="register"
                            >SUBMIT</v-btn>
                        </v-col>
                        <v-col cols="4"></v-col>
                    </v-row>


                    <v-row><v-col cols="12"></v-col></v-row>
                    <v-row><v-col cols="12"></v-col></v-row>


                    </v-card>
                </v-container>
            </v-col>
            <v-col cols="2"></v-col>
        </v-row>
        </v-card>
    </v-container>
</template>

<script>
import axios from '@/axios/axios';
export default {
    name: "Register",
    data: () => ({
        show1: false,
        registerInfo: {
            username: '',
            password: '',
            firstname: '',
            lastname: '',
            citizenid: '',
            phoneNumber: '',
            age: '',
            gender: '',
            img: [],
            email: '',
        },
        loading: false,
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          lengthThirteen: v=> v.length == 13 || 'Required 13 characters',
          lengthTen: v=> v.length == 10 || 'Required 10 characters',
        },
        imgRules: [
            value => !value || value.size < 2000000 || 'Avatar size should be less than 2 MB!',
        ],
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+/.test(v) || 'E-mail must be valid',
        ],
        genders: [
        'Male',
        'Female',
        'Rather not say'
        
      ],
    }),
    computed: {
        getDisabled() {
            return !this.isValid();
        },
    },
    methods: {
        isValid() {
            if (this.registerInfo.firstname
            && this.registerInfo.lastname 
            // && this.registerInfo.username
            // && this.registerInfo.password
            // && this.registerInfo.citizenid
            && this.registerInfo.phoneNumber
            // && this.registerInfo.age
            // && this.registerInfo.gender
            // && this.registerInfo.img
            && this.registerInfo.email
            && this.checkEmail()
            && this.checkPhoneNumber()
            ) {
                return true;
            }
            return false;
        },
        checkEmail(){
            let temp1=0,temp2=0,temp=false;
            for(let i=0;i<this.registerInfo.email.length;i++){
                if(this.registerInfo.email[i]=='@'){
                    temp1=1;
                }
                if(temp1==1 && this.registerInfo.email[i]=='.'){
                    temp2=1;
                }
                if(temp2==1 && this.registerInfo.email[i]!='.'){
                    temp=true;
                }
            }
            return temp;
        },
        checkPhoneNumber(){
            if(this.registerInfo.phoneNumber.length==10){
                return true;
            }
            return false;
        },
        async register() {
            this.loading = true;
            // const params = {
            //     firstname: this.registerInfo.firstname,
            //     lastname: this.registerInfo.lastname ,
            //     phoneNumber: this.registerInfo.phoneNumber,
            //     email: this.registerInfo.email,
            // };
            // const response = await axios.post('/register', null, {params});
            // console.log(response);
            this.$router.push('/Success');
        },
    },


    // async mounted() {
    //     const response = await Axios.get("/ShowAccountServlet?ownerID=2");
    //     this.accountID = response.data;
    //     //console.log(this.accountID);
    //     for(let i=0; i<this.accountID.account.length; i++){
    //         this.arrayAccountID.push(this.accountID.account[i].id);
    //         this.arrayBalance.push(this.accountID.account[i].balance);
    //         console.log(this.arrayBalance[i]);
    //     }

    //     for(let i=0; i<this.accountID.account.length; i++){
    //         if(this.registerInfo.accountNumber == this.accountID.account[i].id){
    //             this.money = this.accountID.account[i].balance;
    //         }
    //         //console.log(this.booleanMoney);
    //     }
    //     if(parseFloat(this.money)<30000){
    //                 this.booleanMoney = true;
    //     }

    //     const responseRegisInfo = await Axios.get("/GetRegisterInfoServlet?ownerID=2");
    //     this.tempOfRegisterInfo = responseRegisInfo.data;
    //     this.registerInfo.first_name = this.tempOfRegisterInfo.accountInfo[0];
    //     this.registerInfo.last_name = this.tempOfRegisterInfo.accountInfo[1];
    //     this.registerInfo.day = this.tempOfRegisterInfo.accountInfo[2].split("-")[2];
    //     this.registerInfo.selectMonth = this.months[parseInt(this.tempOfRegisterInfo.accountInfo[2].split("-")[1])-1];
    //     this.registerInfo.year = this.tempOfRegisterInfo.accountInfo[2].split("-")[0];
    //     this.registerInfo.selectGender = this.tempOfRegisterInfo.accountInfo[3];
    //     this.registerInfo.id_Number = this.tempOfRegisterInfo.accountInfo[4];
    //     this.registerInfo.age = this.checkAge(parseInt(this.tempOfRegisterInfo.accountInfo[2].split("-")[2]), parseInt(this.tempOfRegisterInfo.accountInfo[2].split("-")[1]), parseInt(this.tempOfRegisterInfo.accountInfo[2].split("-")[0]));

    // },
    // computed: mapGetters({
    //     termconDescription : 'gettermConDescrip'
    // }),
    // async mounted() {

    //     //Get Account Identification Number
    //     const response = await Axios.get("/ShowAccount?ownerID=2");
    //     this.accountID = response.data;
    //     console.log(this.accountID);
    //     for(let i=0;i<this.accountID.account.length;i++) {
    //         this.accountList.push(this.accountID.account[i]);
    //     }

    // }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');
h2{
    font-size: 40px;
    position: absolute;
    margin-top: 6px;
    color: #00142f;
}
</style>

