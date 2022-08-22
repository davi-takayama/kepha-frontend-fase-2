let id =0;

//retorna um id sequencial para cada chamada da função
export const FSetId = () => {
    id++;
    return id;
};