export class AppareilService {

  appareils = [
    {
      id: 1,
      name: 'Machine à laver',
      status: 'éteint'
    },
    {
      id: 2,
      name: 'Frigo',
      status: 'allumé'
    },
    {
      id: 3,
      name: 'Ordinateur',
      status: 'éteint'
    }
  ];

  switchOnAll(){
    for(let appareil of this.appareils) {
      appareil.status = 'allumé';
    }
  }

  switchOffAll(){
    for(let appareil of this.appareils) {
      appareil.status = 'éteint';
    }
  }

  switchOnOne(index: number){
    this.appareils[index].status = 'allumé';
  }

  switchOffOne(index: number){
    this.appareils[index].status = 'éteint';
  }

  getAppareilByID(id: number){
    const appareil = this.appareils.find(
      (appareilObject)=>{
        return appareilObject.id === id;
      }
    );

    return appareil ? appareil : this.appareils[0];
  }
}
