$(document).ready(() => {
    $('#apuracao').fadeOut();
    $('#bt_votar').click(() => {
        soma_votos($('#numero_votado').val());
        $('#numero_votado').text('');
    })
    $('#apurar').click(()=>{
        apuracao_Votos();
    })
    
});

let votos_Nulos: number = 0;

let candidatos: any = [
    {
        candidato: 1,
        votos: 0
    },
    {
        candidato: 2,
        votos: 0
    },
    {
        candidato: 3,
        votos: 0
    },
    {
        candidato: 4,
        votos: 0
    },
    {
        candidato: 5,
        votos: 0
    },
];

const soma_votos: any  = (codCandidato: number) => {
    if(codCandidato == 1 || codCandidato == 2 || codCandidato == 3 || codCandidato == 4 || codCandidato == 5){
        candidatos.find(x => x.candidato == codCandidato).votos++;
    }
    else{
        if(window.confirm('não existe nenhum candidato com esse código, seu voto será considerado como nulo')){
            votos_Nulos++;
        }
    }
}

const vencedor: any = () =>{
    candidatos.sort((a , b) => b.votos - a.votos);
    return candidatos[0].candidato;
}

const apuracao_Votos: any = () =>{
    $('#apuracao').fadeIn();
    $('#result_cand1').html(`votos: ${candidatos[0].votos}`);
    $('#result_cand2').html(`votos: ${candidatos[1].votos}`);
    $('#result_cand3').html(`votos: ${candidatos[2].votos}`);
    $('#result_cand4').html(`votos: ${candidatos[3].votos}`);
    $('#result_cand5').html(`votos: ${candidatos[4].votos}`);
    $('#result_nulos').html(`votos: ${votos_Nulos}`);
    $('#ganhador').html(`O vencedor foi o código: ${vencedor()}`);
}

