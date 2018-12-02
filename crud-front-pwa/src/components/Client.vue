<template>
  <v-container>
    <v-layout>

      <v-flex md10 lg8 xs12 offset-lg2 offset-md1> 
        <v-form ref="form" lazy-validation>
        <v-text-field
          label='Nome' required="true"
          v-model="client.nome"
        ></v-text-field>

        <v-text-field
          label='Email' required 
          v-model="client.email"
        ></v-text-field>

        <v-text-field
          label='CPF' required 
          v-model="client.cpf"
        ></v-text-field>

        <v-btn color="success" @click="save()">
          Salvar
        </v-btn>
      </v-form>

      <h1>Clientes cadastrados</h1>

      <v-data-table
        :headers= "headers" 
        :items= "clients" 
        hide-actions class="elevation-1">
        
        <template slot="items" slot-scope="client">
        <td>{{ client.item.nome }}</td>
        <td>{{ client.item.email }}</td>
        <td>{{ client.item.cpf }}</td>
        </template>
      </v-data-table>

      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
    data(){
      return {
        client: {},
        clients: [
        {
            nome: "André Souza",
            email: "babi@gmail.com",
            cpf: "324234234"
        },
        {
            nome: "Barbara Souza",
            email: "rammpk@gmail.com",
            cpf: "83787333" 
        },
        {
            nome: "Edaurdo Souza",
            email: "dudu@gmail.com",
            cpf: "3240909234"
        }]
      }
    },
    methods: {
        save(){
          alert("Nome: "+this.client.nome 
          + "\nEmail: "+this.client.email 
          + "\nCPF: "+this.client.cpf)
        }
    }
}
</script>
