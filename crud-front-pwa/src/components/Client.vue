<template>
  <v-container>
    <v-layout>

      <v-flex md10 lg8 xs12 offset-lg2 offset-md1> 
        <v-form ref="form">
        <v-text-field
          label='Nome' required 
          v-model="client.name"
        ></v-text-field>

        <v-text-field
          label='Email' required 
          v-model="client.email"
        ></v-text-field>

        <v-text-field
          label='Cidade' required 
          v-model="client.city"
        ></v-text-field>

        <v-btn color="primary" @click="save()">
          Salvar
        </v-btn>
        <v-btn color="success" @click="clean()">
          Limpar
        </v-btn>
      </v-form>

      <template>
          <h1>Clientes cadastrados</h1>
      <v-data-table
        :headers= "headers" 
        :items= "clients" 
        hide-actions 
        class="elevation-1">
        
      <v-progress-linear slot="progress" color="blue" indeterminate></v-progress-linear>
        <template slot="items" slot-scope="client">
          <td class="text-xs-right">{{ client.item.name }}</td>
          <td class="text-xs-right">{{ client.item.email }}</td>
          <td class="text-xs-right">{{ client.item.city }}</td>
          <td class="justify-center layout px-0">
            <v-btn icon class="mx-0" @click="edit(client.item)">
              <v-icon color="teal">edit</v-icon>
            </v-btn>
            <v-btn icon class="mx-0" @click="remove(client.item)">
              <v-icon color="red">delete</v-icon>
            </v-btn>
          </td>
        </template>
      </v-data-table>
      </template>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

import axios from 'axios';

export default {
    data(){
      return {
        client: {},
        headers: [
            {
                text: "Nome",
                align: "left",
                sortable: true,
                value: "name"
            },
            { text: "Email", value: "email"},
            { text: "Cidade", value: "city"},
            { text: "Ações", sortable: false},
        ],
        clients: []
      }
    },
    methods: {
        async findAll(){
          try{
            let resp = await axios.get('http://localhost:3000/clients');
            this.clients = resp.data;
          }catch(error){
              alert("Falha ao ao carregar clientes.");
            console.log("Erro ao carregar clientes: " + error);
          }
        },
        async save(){
            try {
              if (this.client._id) {
                let resp = await axios.put("http://localhost:3000/clients", this.client);
              } else {
                let resp = await axios.post("http://localhost:3000/clients", this.client); 
              }
              this.findAll();
              this.clean();         
            } catch (error) {
              alert("Erro ao salvar cliente.");
              console.log("Erro ao cadastrar cliente: "+ error);
              }
        },
        async edit(client){
          this.client = client;
        },
        async remove(_id){
          try {
            if (confirm("Deseja remover este cliente?")) {
              await axios.delete("http://localhost:3000/clients", {data:{_id: _id}});
            this.findAll();
            }
          } catch (error) {
            alert("Erro ao deletar cliente.");
            console.log("Erro ao deletar cliente: "+ error);
          }
        },
        async clean(){
          this.client = {};
        }
    },
     mounted(){
          this.findAll();
        }
}
</script>