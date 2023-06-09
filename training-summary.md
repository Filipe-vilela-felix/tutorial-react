		REACT

aula_3: Folder Structure

É composto por três pastas e quatro arquivos.

Os arquivos são: 
	package.json -> além de mostrar qual versão estou utilizando, também possui "scripts", que por sua vez, garante a execução do aplicativo;
	package-lock.jason -> garante uma instalação consistente de suas dependencias;
	Obs: os arquivos README.md e .gitignore não foram mencionados com importancia;

As pastas são:
	node_modules -> esta é a pasta na qual todas as dependencias são instaladas;
	public -> dentro dela se encontram três arquivos:
		1º manifest.json -> se preocupa com aplicativos da web fora do nosso escopo;
		2º faviction.ico -> onde se encontra a guia do navegador (nada específico);
		3º index.html -> não será adcionado nenhum código nesse arquico, no máximo algumas alterações na tag head. A tag div com id="root", serve para controlar a interface com o usuário, sendo o responsavel final para com este fim;
	src (origem) -> é a pasta onde mais trabalharei no desenvolvimento:
		1º O ponto de partida para o desenvolvimento, é o arquivo index.js;
		2º O arquivo App.js é o responsável pelo HTML exibido no navegador (representa a visualização que vemos no navegador);
		3º App.css -> é a estilização do html. Contendo classes no componente do aplicativo (app.js);
		4º App.test.js -> para testes de unidade (contendo um caso de teste simples);
		5º Index.css -> aplica estilos para a tag do corpo (body);
		6º Logotipo SVG -> referenciado no componente do aplicativo;
		7º serviceWorker.js -> preocupado com os serviços da web progressivos; 


aula_4: Components

Um componente representa uma parte da interface do usuário.
Ex: um componente seria para cabeçalho, um para navevação, um para o corpo, um para o rodape e um para o "todo". E esse "todo" seria o 'root(App)' (componente de aplicativo);

Como vantagem, os componentes são reutilizaveis. Ou seja, o mesmo componente pode ser usado com propriedades diferentes para exibir informações diferentes.

Como o componente traduz o código em nosso aplicativo?
	O componente geralmente é colocado em um arquivo JS. Por exemplo, o componente AppComponent é colocado em um App.js

Existem dois tipos de componentes: 
	Stateless Functional Componente (Componente Funcional Sem Estado):
		Apresenta funções JavaScript que retornam HTML;
		Ex:	function Welcome (props) {
			   return <h1>Hello, {props.name}</h1>;
			}
	Stateful Class Component (Componente De Classes Com Estado): 
		Trabalha com classe de componente com extensão de classe;
		Devem conter um método de renderização, que por sua vez, retornam HTML;
		Ex:	class Welcome extends React.Component {
			   render() {
			      return <h1>Hello, {this.props.name}</h1>;
			   }
			}


aula_5: Functional Components (presente no arquivo Greet.js)

Os componentes funcionais são apenas funções JavaScript que podem receber propriedades/atributos chamados de "props" e retronar HTML que descreve a interface do usuário.

Criando componentes funcionais:
	1º retiro todo meu HTML da pasta App.js, com excessão da div className="App";
	2º crio uma pasta de nome "components" dentro do meu "src";
	3º Neste arquivo, importo o React;
	4º Crio uma função "Greet", retornando um "Hello Vishwas";

Feito isso, precisarei conecta-lo ao resto do aplicativo.
Para isso, preciso exportar a função greeet e importa-la em App.js. E em seguida, inclui-la no componente do aplicativo;
Em seguida, especificamos o componente com um HTML personalizado com um tag do prórprio nome. E se não houber conteúdo entre as tags, posso usar fechamento automatico;

Porém, uma convenção de boa prática, é usar uma função de "seta" para defini-las. Tornando a abordagem mais concisa que a anterior.
	Ex: const Greet = () => <h1>Hello Vishwas</h1>
Obs: Esta abordagem possui vantagens adcionais;

Diferença entre exportações:
	Exportação padrão: 
		export default Greet;
		Exportação ao final do código.
		Obs: Neste, eu não preciso importat o arquivo com o msm nome. Só a direção (from) já é o suficiente. Ex: import MyGreet from './component/Greet';
	Exportação nomeada:
		export const Greet = () => <h1>Hello Vishwans</h1>;
		Exportação na linha da função.
		Obs: Se faz necessária a importação idêntica ao nome do componente e entre chaves. Ex: import {Greet} from './component/Greet';

Obs: DEVO USAR A ABORDAGEM DE COMPONENTE FUNCIONAL SEMPRE QUE POSSÍVEL;


aula_6: Class Components (presente no arquivo Welcome.js)

São formadas por ES6;
Podem opcionalmente receber (props) como entrada e retornar HTML;
Além dos props, um componente de classe pode manter um estado ("state") interno privado, ou seja, pode conter informações privadas e usa-las pra descrever a interface do usuário;

Sempre em que eu criar um componente de classe, devo incluir duas importações, o React + a classe de componentes:
	import React, { Component } from 'react'

Para uma classe se tornar um component de React, existem duas etapas:
	1º Extender a classse de componente do React:
		Ex: ...extends Component {

		    }
	2º Implementar um método de renderização que retornará nulo ou algum método;
		Ex: class Welcome extends Component {
		       render() {
		       	  return <h1>Class Component</h1>
		       }
 		    }


aula_7: Hooks Update

Os ganchos permitem usar diferentes recursos do React em seus componentes.
Você pode usar os ganchos embutidos ou combiná-los para construir o seu próprio.


aula_8: JSX

JavaScript XML (JSX) - é uma extensão para a sintaxe da linguagem JS.
A biblioteca React é uma extensão para escrever XML como código para elementos e comoponentes.
As tags JSX tem atrubutos de nome, de tag e de filhos.
JSX não é uma necessidade para escrever aplicativos React, porem o torna mais simples e elegante.
JSX se traduz em JS puro que é entendido pelos navegadores.

Diferença de um componente com JSX vs sem JSX:
	Com JSX:
		const Hello = () => {
		   return (
		      <div>
			<h1>Hello World</h1>
		      </div>
		   )
		}
	Sem JSX:
		Para fazer isso, a biblioteca React fornece um método de criação de elemento, veja abaixo.
		const Hello = () => {
		   return React.createElement(
			'div', 							
			{id: hello}, 
			React.create.Element('h1', null, 'Hello Vishwas')
			)
		}	
		A diferenca é que o código agr muda para retornar React.createElement(), aceitando no mínimo três parametros:
			O primeiro parâmetro é a string que especifica a tag HTML a ser renderizada pelo nosso exemplo;
			O segundo, é para propriedade adcional. Quando não há, o resultado é "null";
			O terceiro são os filhos (que podem ser mais de um, inclusive, mais tres parametros);

		O segundo parâmetro basicamente é um objeto de pares chave-valor que serão aplicados ao elemento. Ex: id="hello"; 


aula_9: Props

O React nos permite duplicar um componente quantas vezes desejarmos, porém, tal caracteristica nao é tao usual se nao me permitir alterar alguns detalhes.
Por esse motivo, usa-se o "props" (atributo);


aula_10: State

Assim como o props, ele tambem é capaz de influenciar o que é renderizado na tela.

Props vs State:
	Props:
		- São passadas para o componente;
		- Parametros de função;
		- São imutáveis;
		- Em componentes funcionais -> props;
		- Em componentes de classes -> this.props;

	State:
		- É gerenciado com o componente:
		- Variabeis declaradas no corpo da função;
		- O estado pode ser alterado;
		- Em componentes funcionais -> useState Hook;
		- Em componentes de classe -> this.state;

No state, se faz necesário a criação de um objeto de estado, inicializa-lo. Geralmente é feita dentro da classe constructor().
E dentro dele, chamamos o método super().
Em seguida, criamos nosso objeto de estado -> this.state = {}.
Dentro de nosso objeto, inicializo uma propriedade e crio um valor de estado para ela;
	Ex: constructor() {
		super();
		this.state = {
		   message: 'Wellcome visitor'
		}
	    }

O método setState = ({}) serve para alterar o estado já criado;	


aula_11: setState (presente no arquivo Counte.js)

Sempre faça uso do setState e nuna modifique o estado diretamente.
Se o código tiver que ser executado após o estado ter sido atualizado, coloque esse código na função de retorno de chamada que é o segundo argumanto para o referido metodo de estado.
Quando você tiver que atualizar o estado com base no valor do estado anterior, passe uma função como um argumento em vez do objeto regular.
 Uma melhor explicação a cerca dessa aula, se encontra no vídeo: https://www.youtube.com/watch?v=lURUBUu7IwY


aula_12: Desestruturing props and state

A desestruturaçao é um recurso es6 que torna possível descompactar arrays ou propriedades de objetos em variáveis distintas.
Em React, props de desestruturação e estado melhoram a legibilidade do código. Podendo ser feita tanto no componente funcional, quanto no componente de classe.
	
	Componentes Funcionais (existem duas maneras):
		1ª) É estrutura-lo no próprio parâmetro da função, então, ao invés de apenas inserir (props), teremos parenteses e dentro deles, chaves, para inserirmos as variáveis separadas por vírgula no lugar de props;
			Ex: const Greet = ({name, heroName}) => {
    				return (
        			   <div>
            			      <h1>Hello {name} a.k.a {heroName}</h1>
        			   </div>
    				) 
			     }
		2ª Nesse, voltamos a nomear o parametro como props. E no corpo, adiciono uma const e entre chaves, os atributos igual (=) a props:
			Ex: const Greet = props = {
				const {name, heroName} = props
				return (
        			   <div>
            			      <h1>Hello {name} a.k.a {heroName}</h1>
        			   </div>
    				) 
			     }
	Componentes de Classe (usa-se a segunda maneira):
		Além de funcionar na segunda maneira, posso usar a propriedade de desestruturação de state, seguindo a mesma lógica:
			Ex: class Welcome extends Component {
				render() {
				   const {name, heroName} = this.props
				   // const {state1, state2} = this.state
				   return (
				      <h1>
					Welcome {name} a.k.a {heroName}
				      </h1> 
				   )
				}
			     }


aula_13: Event Handling (Tratamento de Eventos)

Será aprendido com lidar com eventos (click, por exemplo) no React.
Obs: Os eventos de React são nomeado usando letras maiúsculas em vez de minúsculas. Ex: <FunctionClick.js /> (este, localizado no App.js);

	Nos Componentes Funcionais:
		Ex: function  FunctionClick() {
			   
			   function clickHandle() {
				console.log(Button Clicked)
			   }
			   
			   return(
			      <div>
			         <button onClick={clickHandle}>Click</button>
			      </div> 
				)
			}
		Assim como feito em "Counter.js", por conta do JSX, você passa a função como manipulador de eventos, e não como uma simples string,
			então, em vez do manipulador de cliques "clickHandle()" ser entre aspas, teremos o manipulador de cliques entre chaves.
		Nota-se que na clicagem do botão, não adiciono os parenteses, pois não quero que seja uma chamada de função. Queremos que o manipulador seja uma função, e não uma chamada de função.
			Caso contrário, o manipulador ficará chamando o resultado antes mesmo da clicagem do botão.
	
	Nos Componentes de Classe:
		É parecido com os Componentes Funcionais. A única diferença são propriedades já conhecidas:
		Ex: class ClassClick extends React.Component {
				clickHandle() {
					console.log("Clicked the button")
				}
				
				render() {
					return(
						<div>
							<button onclick={this.clickHandle}>Click me</button>
						</div>
					)
				}
			}


aula_14: Binding Event Handlers (Manipuladores de Eventos em Vinculação)

Aprenderemos a como vincular manipuladores de eventos em componentes de React.
O motivo pelo qual vinculamos manipuladores de eventos em React, é puramente por causa da maneira como essa palavra-chave(this) funciona em JavaScript, e não por causa da maneira como o React funciona.
	Ex do que não fazer: class EventBind extends Component {
    
							constructor() {
								super()
								this.state = {
									message: 'Hello'
								}
							}

							clickHandler() {
								this.setState({
									message: 'Goodbye!'
								})
							}
							
							render() {
								return (
									<div>
										<div>{this.state.message}</div>
										<button onClick={this.clickHandler}>Click</button>
									</div>
								)
							}
						}

	Após a criação do botão, criamos uma propriedade de estado chamada message e a vinculamos à interface do usuário;
	Após isso, adicionaremos um atributo "onClick" e sua respectiva função no botão;
	Ao tentar rodar o código desta maneira, perceberei que aparecerá a seguinte mensagem:
			ERROR: Não é possível ler o estado do conjunto de propriedades indefinido; 		
	Então, se eu colocar minha palavra-chave (de um componente de classe), no caso, a palavra "this" em um console.log(), no lugar do atributo "this.setState", será mostrado no console do navegador, a palavra indefined. Indicando um não reconhecimento da mesma: 
		Ex: clickHandler() {
				/*this.setState({
					message: 'Goodbye!'
				})*/
				console.log(this)					
			}
		Obs: Este é um comportamento típico do JS

IMPORTANTE: Lembre-se de que a palavra-chave é indefinida em um manipulador de eventos. E é essa razão pela qual a ligação de evento é necesária em Componentes de Classe React;

Existem várias formas de vinculação de eventos. E nesta aula, todos eles serão examinados!
	Eis a baixo, todas as opções:
		1ª) Temos que usar a palavra-chave bind, que significa "ligação", e vincular o manipulador no método render(). (NÃO ACONSELHAVEL em projetos garndes)
				Ex:	render() {
						return (
							<div>
								<div>{this.state.message}</div>
								<button onClick={this.clickHandler.bind(this)}>Click</button>
							</div>
						)
					}
				Embora esta funcionalidade funcione perfeitamente, cada atualização no estado fará com que o componente seja novamente renderizado, isso por sua vez, gerará outro manipulador de eventos em cada redereização.
				Embora o impacto no desempenho não seja grave em aplicativos pequenos. Pode ser problemático entre aplicativos grandes e em componentes que contém componentes filhos aninhados.
		
		2ª)	Usar função de seta no método render(), dentro do onclick:	(MAIS FÁCIL, PORPÉM, NAO ACONSELHAVEL em projetos garndes ou components com filhos)
					É basicamente chamar o manipulador de eventos no corpo da função de seta, dentro do onClick.
					Ex: render() {
							return (
								<div>
									<div>{this.state.message}</div>
									<button onClick={() => this.clickHandler()}>Click</button>
								</div>
							)
						}
					Observe que não precisamos de chaves ou a palavra-chave return para simbolizar o corpo da função de seta. E isto ocorre porque o corpo da função é uma única instrução.
					Porém, semelhante a primeira abordagem, isso também tem implicações de desempenho em alguns cenários.

		3ª) Vinculação no constructor (MAIS ACONSELHAVEL):
				Essa abordagem lida com a ligação do manipulador de eventos no constuctor() em oposição à ligação no método render().
				Então no constructor(), nós adicionamos uma linha em que adicionaremos: this.clickHandler = this.clickHandler.bind(this);
				Ex: constructor() {
						super()
						this.state = {
							message: 'Hello'
						}
						this.clickHandler = this.clickHandler.bind(this)
					}

					clickHandler() {
						this.setState({
								message: 'Goodbye!'
						})
					}
							
					render() {
						return (
							<div>
								<div>{this.state.message}</div>
									<button onClick={this.clickHandler}>Click</button>
							</div>
						)
					}
				Diferentemente das outras abordagens, é que nessa a vinculação só ocorre uma única vez no constructor, isto é melhor, comparado a vinculação no método render().
		
		4ª) Usar uma função de seta como uma propriedade de classe.	(RECURSO AINDA EXPREIMENTAL)
				Basicamente, se trata em mudar a maneira como você define seu método de classe, nesse caso, o 	clickHandler() {
																													this.setState({
																														message: 'Goodbye!'
																													})
																											   	}
				passa a ser igual a uma função de seta, e dentro dela, a mudança de estado:	clickHandler = () => {
																								this.setState({
																									message:'Goodbye!'
																								})
																							}


aula_15: Methods as props

Vimos como componentes pai podem passar props para seus componentes filhos. Nos dados no componente pai quando passado como props está disponível nos componentes filhos.
Agora, e se um componente filho quisesse se comunicar com o componente pai? Bom...isso ainda seria feito com props. Mas desta vez, passamos uma referência a um método como props para o componente filho.
	Ex's apresentados nos arquivos "ParentComponent.js" e "ChildComponent.js":
		1º Criar um componente Pai:
			class ParentComponents extends React.Component {
    
				constructor() {
					super()
					this.state = {
						parentName: 'parent'
					}
					this.greePatent = this.greetParent.bind(this)
				}

				greetParent() {
					alert(`Hello ${this.state.parentName}`) // Este é um recurso do es6/es7 que substitui a concatenação
				}
				
				render() {
					return(
						<div>
							<ChieldComponent />
						</div>
					)
				}
			}
			Dentro do render(), principalmente da <div>, receberá um componente filho.
		
		2º Criar um componente Filho:
			function ChildComponent() {
				return(
					<div>
						<button>Gree Parent</button>
					</div>
				)
			}

O intuito desses códigos é, ao clicarmos no botão no componente filho, desejamos executar o método definido no componente pai.
Basicamente, um componente filho chama um método de componente pai usando props. A única diferença desta vez é que passamos o próprio método como um prop para o componente filho. Veja abaixo:
	 render() {
        return(
            <div>
                <ChildComponent greetHandler={this.greetParent} />
            </div>
        )
    }
Certifique-se de não adicionar os parênteses, estamos passando uma referência ao método pai como prop, chamado de greetHandler, em pt-br, manipulador de suadação.
Agora, podemos obter essa referência em nosso componente filho:
	function ChildComponent(props) {
		return(
			<div>
				<button onClick={props.greetHandler}>Greet Parent</button>
			</div>
		)
	}
	
Resumindo o que foi feito:
	Chamamos com sucesso um método no componente Pai a partir de um botão no componente Filho, ignorando o método prosp para o componente Filho.

Agora, veremos como passar um parâmetro ao chamar um método Pai do componente Filho, e é aqui que uma função de seta na declaração de retorno se torna útil.
A sintaxe da função de seta é a mais simples maneira de passar parâmetros do componente Filho para o componente Pai:  	
	function ChildComponent(props) {
		return(
			<div>
				<button onClick={() => props.greetHandler()}>Greet Parent</button>
			</div>
		)
	}
Agora, podemos passar um parâmetro, no caso, uma string, do Filho pra o pai:
	function ChildComponent(props) {
		return(
			<div>
				<button onClick={() => props.greetHandler("child")}>Greet Parent</button>
			</div>
		)
	}
E por fim, no método presente no elemento pai, passaremos esse parametro para ele:
	greetParent(childName) {
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }
	

aula_16: Conditional Rendering (Renderização Condicional)

A Renderização Condicional serve para acultar aguns elementos HTML dependendo de suas condições.
Obs: Antes de iniciar as abordagens no código, crio um Componente de Classe e adiciono um this.state e uma propriedade no mesmo.
Existem 4 abordagens diferentes:
	1ª) If/else:
		1.1) Quero que minha mensagem seja renderizada condicionalmente com base no estado de login de teste;
		1.2) Crio um if/else com base na propriedade do meu state. Desenvolvendo condições que serão renderizadas no navegador;

	2ª) Element Variables (Variáveis de elemento):
		Este método me ajudará a renderizar todo o componente ou uma parte dele.
		2.1) No render(), crio uma variavel que nao recebe parametro;
		2.2) Crio um if/else que tera como parametro o this.state criado e  contera em seu corpo a variavel criada, recebendo uma mensagem que sera renderizada, dependendo do resultado;
		2.3) Faço um return() que conterá a variavel criada (entre aspas no codigo);

		Obs: Esta abordagem é melhor que a primeira;

	3ª) Ternary Conditional Operator (Operador condicional ternário):
		O beneficio dessa abordagem, é que ela pode ser usada dentro do JSX.
		3.1) Dentro do render(), crio um return onde digitarei o this.state criado, e em seguida, adicionarei apos ele um ponto de interrogação (simbolizando uma pergunta de sim ou nao);
		3.2) Após o ponto de interrogação, entre parenteses adicionarei a div que corresponde a resposta verdadeira. E em seguida, um "dois pontos", representando o contraponto a seguir;
		3.3) Após os "dois pontos", indicando um contraponto, adcionarei a segunda div que corresponde a uma resposta falsa;
			  

	4ª) Short curcuit operator (Operador de curto circuito):
		Este último é apenas um caso específico da abordagem do operador ternário. Quando você deseja renderizar algo ou nada, usa-se o operador de curto circuito.
		4.1) Dentro do render(), crio um return onde digitarei o this.state criado, e sem seguida, adicionarei um && (indica "e"...) mais o div que desejo que ele incremente.
			Se o this.state criado foi false, a operacao seguida do && nao ocorrera. E nada será renderizado.


aula_17: List redering

Será aprendido a repetir algum HTML para cada item de uma lista criada.
Mas antes...
	Podemos usar o metodo .map para iterar rapidamente de uma array/matriz e retornar uma nova array/matriz com as alterações desejadas.
	O método map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado:
		Ex: const array1 = {1, 4, 9, 16};
			consta map1 = array.map(x => x * 2);
			console.log(map1);
			// Expexted output: Array [2, 8, 18, 32]
O método .map será usado para renderizar a lista de nome, por exemplo.
Obs: O método .map é um código JavaScript e precisa ser avaliado entre chaves no JSX.
Ex: function NameList() {
    	const names = ["Bruce", "Clark", "Diana"]
		return(
			<div>
				{
					names.map(name => <h2>{name}</h2>)
				}
			</div>
		)
	}
Uma alteração que pode ser feita se desejar, é mantendo a declaração de retorno simples, movendo a lógica de renderização da lista:
	Ex: function NameList() {
			const names = ["Bruce", "Clark", "Diana"];
			const nameList = names.map(name => <h2>{name}</h2>);

			return nameList;
		}

Obs: Normalmente, teremos uma lista de objetos com algumas propriedades que devem ser renderizadas. E em tais casos é sempre uma boa ideia refatorar o JSX em um componente separado.
		E então, usar o método .map JSX; ESTE COSTUMA SER O PADRÃO;


aula_18: List and Keys

- Uma chave é um atributo de string especial que você precisa incluir para criar listas de elementos;
- As chaves fornecem aos elementos uma identidade estável;
- As chaves ajudam ao React a identificar quais item que foram alterados, adicionados ou removidos;
- Isso resulta em uma atualização muito mais eficiente da interface do usuário;

Cada item de uma lista renderizada deve ter um prop chamado key (chave). E o valor desse prop deve ser único dentro da lista.
Então vamos adicionar ess prop a cada item de nossa lista.
Sendo assim, dentro do método .map, vou adicionar a chave prop.
	Ex: const personList = persons.map(person => <Person key={person.id} person={person} />);

Obs: Os props principais não são aceitos nos componentes filhos. Servem apenas para renderizar a lista com eficiência;


aula_19: Index as Key Anti-pattern (Índice com anti-padrão de chave)

Ao ler documentos de React, notarei que boa parte dos exemplos que os desenvolvedores usam em listas, em sua chave, usam-a como index para renderização da lista. Mantendo o código simples e elegante.
Como usar index como chave de uma lista e que problemas eu posso enfrentar quando usa-lo.
O index é passado como segundo parâmetro para a função de chave dentro do metodo .map, e esse index é usado como valor para o prop. 
	Ex: const nameList = names.map((name, index) => <h2 key={name}>{index} {name}</h2>);	

Porém, usar o index como uma chave pode causar sérios problemas de interface de usuário em determinados cenários;

Usar o index como uma chave só se torna viável desde que minha lista satisfaça certas condições:
	1ª) Os itens da minha lista não tem um id único;
	2ª) A lista seja uma lista estática e não mude;
		Ex: Você nunca adiciona itens à lista ou remove itens da lista;
	3ª) A lista nunca será reordenada ou filtrada;
		Ex: Classificação com base em valor de coluna ou filtragem com base nas entradas do usuário;

Quando minha lista satisfazer não apenas uma, mas todas as tres condições, eu possousar o index como segurança como uma chave na maioria das vezes


aula_20: Styling and CSS Basics

Algumas opções para estilizar componentes de React:
	1ª) CSS stylesheets (folhas de estilo de CSS regular);
	2ª) Inline styling (estulo embutido);
	3ª) CSS Modules (modulo CSS);
	4ª) CSS in JS Libaries (bibliotecas de js);
	Obs: Nesta aula serão aprendidas somente as tres primeiras;

1) CSS stylesheets:
	1.1) Crio um arquivo.css em components, por exemplo.
	1.2) Integro a classe de estilização criada nele, dentro do componente que desejo usar, atravez de uma classe.

	Se preciso integrar duas ou mais classes dentro de uma div, sendo que uma delas é uma vairavel que realiza uma operação (ex: sim = vermelho, nao = laranja),
		esta vairavel precisa se tornar um valor literal para que eu possa inserir uma outra classe.
		Ex: let className = props.primary ? "primary" : "" ;
				return(
					<div>
						<h1 className={`${className} font-xl`}>Stylesheets</h1>
					</div>
				)
	Como funciona a importação da folha no componente principal (app.js): import './myStyle.css'

2) Inline styling:
	Na linha de estilos, vamos estilizar um título, por exemplo. Porém, na linha de estilos não são especificados como uma string. Ao invez disso, são especificados como objeto,
		cuja chave é um camel case (camelo) do nome do estilo, e o valor é geralmente uma string.
	Se quiser adicionar propriedades CSS, apenas adicione uma vírgula.
	E ao inves de className="" no retturn() como é com o stylesheet, nesse, vc aplica o objeto criado no atributo style={}, pq se trata na chamada de um objeto.

3) Modulo CSS:
	O recurso de módulos está disponível com scripts de React versão 2 ou superior. Para isso, sertifique-se de atualizar seu pacote de aplicativo.
	A convensão de nomenclatura de arquivo para ser usado para modulo CSS com create-react-app, o nome do arquivo deve ser sufixado com .module.css

	Como funciona a importação do modulo no componente principal (app.js): import Style from './appStyles.module.css'
	Como funciona o adicionar dessa propriedade no corpe return(): className={style.(nome da classe)}
	Obs: Nota-se que há uma diferença neste modo em relação ao stylesheet. 

	Uma vantagem de usar .modulo.css é que as classes são localmente definidas por padrão.


aula_21: Basic of Form Handling (Noções básicas de manuseio de formulários):

Em um componente de entrada, a valor do mesmo pode ser definifo como uma propriedade de estado.
Existe um ciclo que define esse valor inical do estado:
	Ex: 
		1º) crio um value={} no input, que recebera um this.state;
		2º) crio um um atributo no input que conterá um objeto, em que dentro dele, estará o setState;
O React sempre terá acesso ao estado do componente que reflete valores atualizados no elemento do formulário

Se criarmos um arquivo para inserir um componente de formulario, onde nele estarão apenas um label com um texto e um simples input. Não o tornará um componente controlado pelo React.
Para isso...vamos passar por duas etapas:
	1ª) Adicione um elemento HTML;
	2ª) Atribua um estado de componente ao valor do elemento;
	3ª) Atribua uma manipulador inalterado que atualiza o estado. 
Resumindo: 
	- Temos o nome de usuário como uma propriedade de estado, que é fornecida como um valor para o atributo value={} no elemento de entrada. 
	- Sempre que houver uma alteração em que o novo valor é propagado para lidar com a alteração do nome de uniário, que define de volta a propriedade de estado username. Ele receberá um valor atualizado
		atravez de event.target.value. Obs: esse .event é uma propriedade declarada na mudança de estado;
	- E quando o estado é dito, o método render() é chamado novamente e o novo valor está disponivel para a propriedade value={}
	Ex: constructor() {
			super()
			this.state = {
				username: ""
			}
		}

		handleUsernameChange = (event) => {
			this.setState({
				username: event.target.value
			})
		}

		<input 
            type="text" 
            value={this.state.username} 
            onChange={this.handleUsernameChange} 
        />


aula_22: Component Lifecycle Methods (Métodos de Ciclo de Vida dos Componentes)

Obs: Esses métodos não funcionam em um ciclo de vida funcional;
Obs: Os métodos a seguir são a partir da atualização 16.4;

Os métodos de ciclo de vida de um componente são classificados em 4 fases:
	1ª) Mounting (Montagem):
		São chamados quando uma instância de um componente está sendo criada e inserida no DOM.
		Durante a fase de montagem, temo 4 construtores de métodos:
			1º) constructor();
			2º) static getDerivedStateFromProps - (significa: método estático que obtém estado derivado de props);
			3º) render();
			4º) componentDidMount;

	2ª) Updating (Atualização):
		São chamados quando um componente está sendo renderizado novamente como resultado de alterações em seus props ou state.
		Durante a fese de atualização, temos 5 métodos:
			1º) static getDerivedStateFromProps - (significa: metodo estatico obtém 'derivar o estado de props');
			2º) shouldComponentUpdate - (significa: deve atualizar o componente);
			3º) render();
			4º) getSnapshotBeforeUpdate - (significa: instantaneo antes da atualização);
			5º) componentDidUpdate - (significa: o componente foi atualizado);

	3ª) Unmounting (Demontagem):
		São chamados quando um componente está sendo removido do DOM.
		Durante a desmontagem, temos apenas 1 métod:
			componentWillUnmount - (significa: o componente foi desmontado);

	4ª) Error Handing (Tratamento de Erros):
		São chamados quando há um erro de renderização em um método de ciclo de vida ou no constructor de qualquer componente filho.
		Para o tratamento de erros, temos dois métodos:
			1º) static getDerivedStateFromError (significa: um método estático obtenha o estado derivado do erro);
			2º) componentDidCatch (significa: o componente detectou);


aula_23: Component Mounting Lifecycle Methods (Métodos de Ciclo de Vida de Montagem de Componentes)

São métodos chamados quando uma instancia de um componente está sendo criada e inserida no DOM. 
E vamos passar por eles na ordem que são invocados.

1º) Constructor(props):
	- É uma função especial que será chamada sempre que um novo componente for criado.
	Para que serve o constructor()?
		- É perfeito para inicializar os estados e vincular os manipuladores de eventos à intancia de classe.
	O que fazer em um constructor()?
		- Basicamente, causar efeitos colaterias. Ex: nunca fazer solicirações HTTP (http request) em um constructor;
	
	- Ao definir meu constuctor(), devo sempre chamar uma função especial, ex: super;
		Isso chamará o constructor() de classe base em nosso componente. Temos acesso a esse .props somente depois de termos incialmente chamado super() nos porps como argumento.
	- O constructor() é o único lugar onde eu devo aterar ou definir o estado diretamente sobrescrevendo esses campos de estados de ponto em todos os outros senários.

2º) static getDerivedStateFromProps(props, state): 
	- A documentação classifica esse método como um método de ciclo de vida raramente usado.
	- Este método é basicamente usado quando o estado do componente depende de mudanças em props ao longo do tempo.
	- Nesse método, NÃO devo causar efeitos colaterais. Ex: buscar dados de um endpoint.

3º) render():
	- É o único método necessário em um componente de classe.
	- Nele, nós simplesmente lemos .props & state e o return JSX que descreve a interface do usuário.
	- Neste, NÃO devo alterar o estado do componente ou interagir com o DOM, ou fazer qualquer chamadas AJAX.
	- Os métodos dos ciclos de vida dos componentes filhos também são executados.

4º) componenteDidMount():
	- Este método será chamado apenas uma vez em todo ciclo de vida de um determinado componente e é invocado imediatamente após um componente e todos os componente filhos terem sido renderizados.
	- Este método é o lugar perfeito para causar efeitos colaterais. Ex: eu posso interagir com o DOM ou executar qualquer chamada AJAX para carregar dados de load.
	- É um bo lugar para executar a inicialização que requer DOM e carregar dados fazendo solicitações de rede.


aula_24: Updating Lifecycle Methods (Método de Estilo de Vida Atualizados)

São metodos chamados quando um componente está sendo pré-renderizado devido a alterações em porps ou no estado.
Vamos passar por eles na ordem em que são invocados.

1º) static getDerivedStateFromProps(props, state):
	- Este recebe props e state como seu parametro e tem que retornar null ou um objeto que representa o estado atualizado do componente.
	- Este método é usado toda vez que um componente é renderizado novamente.
	- E como dito antes, é usado quando o estado depende dos props do componente.
	- Nesse método, NÃO devo causar nenhum efeito colateral e obter o estado estanho dos porps.
	- É um dos métodos mais RARAMENTE usados na fase de atualização!

2º) shouldComponentUpdate(nextProps, nextState): 
	- Este método recebe props atualizados e o estado.
	- O propósito deste método é claro a partir de seu nome. Ele determina se o componente deve ser renderizado novamente ou não.
		Por padrão, todos os componentes serão renderizados novamente sempre que os props que eles recebem ou seus estados, mudarem.
	- Este método pode prevenir esse comportamento padrão retornando false.
	O que se pode fazer nesse método, é comparar as propriedades existentes e os valores de estados com as proximas propriedades e valores de estado, 
		e retornar true ou false para permitir que o React saiba se o componente deve atualizar ou não. Portanto, este método é basicamente para otimização de desempenho.
	- Deve ser evitado quaisquer efeitos colaterias ou chamando o referido método de estado.
	- É classificado como um método RARAMENTE usado na documentação ofincial do React.

3º) render():
	- É um método NECESSÁRIO.
	- Ler props & state e reotrna JSX, descrevendo a UI.
	- Evitar alterar o estado ou interagir com o DOM nesse método.

4º) getSnapshotBeforeUpdate(prevProps, prevState):
	- Este método aceita testes anteriores e state anterior como parâmetros, e é chamado logo antes da alterações do virtual DOM. Devem ser refletidos no DOM.
	- Este método é RARAMENTE usado de acordo com a documentação do React.
	- Eu usaria esse método para capturar algumas informações do DOM. Ex: eu posso ler a posição de rolagem do usuário e após a atualiazção, manter essa posição de rolagem, executando alguns calculos;
	- Este método retornará null ou um valor. O valor retornado será passado como o terceiro parâmtro para o próximo método sobre o qual falaremos. Portanto, obtenha um instantânio antes da atualização
		usado para ler o estado atual do DOM e retornar um valor ou não.

5º) componentDidUpdate(prevProps, prevState, snapshot):
	- É um método BATANTE USADO.
	- Este método será chamado chamado depois que a renderização é concluída nos ciclos de reenderização.
	- Este método é garantid para ser chamado apenas uma vez em cada ciclo de renderização, então.
	- É permitido causar efeitos colaterais, ou seja, posso fazer chamadas AJAX, mas antes, eu preciso comparar props anteriores com as novas props. E então deicidir se fasso a chamada AJAX ou não.
	- Se eu não estou comparando, estou fazendo requisições idesejadas, o que NÃO é uma boa ideia.


aula_24: Unmounting Phase Method (Método de Fase de Desmontagem)

Este possui apenas um método:
 1) componentWillUnmount(): 
	- Estemétodo é ivocado imediatamente antes de um componente ser desmontado e destruido.
	- Neste método, eu posso realizar algumas tarefas de limpeza como: cancelamento e solicitações de rede, remover eventos manipuladores, cancelando quaisquer assinaturas, e também,
		invalidando temporizadores de tempo limite definido ou intervalo definido.
	- NÃO realizar chamadas setState method. (pq o componente nunca é lembrado depois de desmontado).
	Resumindo: O componente desmontará, executará a limpeza necessária e não chamará o referido estado.


aula_24: Error Handling Phase Methods (Método de Fase de Tratamento de Erros)

Esta fase apresenta dois métodos:
1º) static getDerivedStateFromError()
2º) componentDidCatch()

Ambos são chamados quando há um erro durante a renderização em um método de ciclo de vida, ou no contructor de qualquer componente filho.


aula_25: Fragments

No React, fragments permite que eu agrupe uma lista de elementos filhos sem adicinar nós extras ano DOM.
Nota-se que ao criarmos um componente, todo o conteúdo presente no return() precisa ser envolto pela tag <div>.
E para impedir que isso ocorra, usamos o fragmento React, substituindo a tag <div>: 
	<React.Fragment></React.Fragment>
A diferença é notada ao visualizar a parte de Element no devTools. Notar-se-há que nao será vista a tag.

Uma vantagem dessa tag, é que ela pode aceitar o atributo key ao renderizar listas listas de itens.
Obs: No lugar de <React.Fragment> posso usar uma tag de abertura e fechamento vazia: <> </>
	A desvantagem de usar essa tag vazia, é que não poderei passar o atributo key.

Resumindo: O React.Fragment ou <>, permite criar componentes filhos sem adicionar nós(div) no DOM


aula_26: Pure Components (Componentes Puros)

Existe uma segunda maneira de criar um componente de classe, e é extendendo a classe de componente puro de React. (Examinar o código presente no arquivo "PureComp.js")
Diferença entre o componente puro e o componente regular / de classe, e quando usar uma ou outra:
	Regular Component: 
		- Um componente regular não implementa o método shouldComponentUpdate(). Ele sempre retorna true por padrão.
	Pure Component: 
		- O componente puro implementa o shouldComponentUpdate() com um shallow props (propriedades rasas) ou state comparison (comparação de estado).
Mas antes: Para demonstar tal diferneça, preciso de um componente regular, um componente puro e um componente Pai, que é capaz de mudar seu estado. 
			Após a criação de ambos os componentes filhos dentro do componente Pai e a inserção do console.log() em todos os componets criados,
				nota-se que no console.log() o componente puro só é renderizado uma única vez, mesmo o setState sendo colocado para renderizar a cada dois segundos.

Shallow Comparison (SC) - Comparação superficial (ditos em Pure Component):
	1) Primitive Types (Tipos Primitivos):
		Para dois tipos primitivos A e B como números, strings e booleanos, uma comparação superficial B retorna verdadeiro se A e B tem o mesmo valor e são do mesmo tipo.
		Em outras palavras, A (SC) B returns true, sugnifica que ambas tem o mesmo tipo.
		Ex: string "Vishwas" (SC) string "Vishwas" return true.
	
	2) Complex Type (Tipos Complexos), como objetos e matrizes:
		Uma comparação superficial B retorna verdadeiro se A e B referenciam extatamente o mesmo objeto.
		Ex: var a = [1,2,3];
			var b = [1,2,3];
			var c = a;

			var ab_eq = (a === b); // false
			var ac_eq = (a === c); // true
		Em outras palavras: uma comparação superficial B retornará falso mesmo que os itens em ambas as áreas sejam os mesmos, essas duas matrizes nçao referenciam o mesmo objeto..
							Uma comparação C por outro lado, retornará verdadeiro porque eles apontam para o mesmo objeto.

Pure Component:
	- Um componente puro implementa shouldComponentUpdate() com um shallow prop (prop superficial) e state comparison (comparação de state).
		SC do prevState (estado anterior) com o currentState (estado atual).
		SC do prevProps (propriedade anterior) com o currentProps (propriedade atual).
		Ambas, somente quando a comparação superficial indica que há uma diferença que o componente irá renderizar novamente: Re-render comoponent.
	- Evita renderizações desnecessárias e podem fornecer um aumento de desempenho em certos cenários.
		ex: Digamos que eu esteja renderizando uma lista de 50 itens, ao não refaze-los quando não for necessário, eles terão um bom aumento de desempenho;

RESUMO DA AULA:
	Em react, podemos criar um component estendendo a classe de componente puro.
	Um componente puro implementa o método de ciclo de vida shouldComponentUpdate(), realizando uma comparação superficial sobre os props e o state do componente.
	Se não houver diferença, o componente não é renderizado novamente - aumento de desempenho.
	É uma boa ideia garantir que todos os componentes Filhos também sejam puros para evitar comportamentos inesperados.
	Se eu estiver usando componentes puros, nunca altere o state. Sempre retorne um novo objeto que reflita o novo estado.


aula_27: Memo 

Os componentes puros apenas retrocedem os componentes de classe quando há uma diferença na shallow comparison (comparação superficial) de props e state, 
	e afirmam que isso resulta em uma melhoria de desempenho.
Para que os componentes puros funcionem também com classes, utilizamos o React.memo.
O que componentes puros são para componentes baseados em classe, react.memo é para os componentes funcionais.
Tudo o que preciso fazer é exportar o React.memo() padrão e passar o nome do componente como argumento. Ex: export default React.memo(MemoComp)


aula_28: Refs 

Basicamente, vamos tornar possível acessar os nós DOM diretamente no React.
Para fazer isso, usaremos o seguinte caso de uso:
	Suponha que nós tenhamos um formulário de login e senha. Assim que a página for carregada, digamos que por padrão, queremos que o campo de entrada do nome do  usuário seja focado.
Veremos com fazer isso com refs:
PRIMEIRA abordagem:
	1º) Criar uma ref:
		Fazemos isso usando o método react.crateRef, obviamente dentro do constructor.
		E nesta nova propriedade, atribuímos React.createRef().
		Obs: É comum criarmos refs no constructor para que possam ser referenciados em todo o componente;
	
	2º) Anexar esta ref criada ao meu elemento de entrada no método render():
		Para anexar uma referência, fazemos uso do atrubuto ref="", e incluiremos nele a ref criada.

	3º) Chamar o método de foco neste elemento de entrada:
		Mas antes, precisamos saber o que a propriedade this.inputRef mantém depois que uma referência é criada:
			Para isso, vou adiciar um grancho do ciclo de vida do componente montado (componentDidMount()) e, dentro do componnte, registrarei no console o this.inputRef. 	
			Observe que temos um objeto registrado no console, se eu expandi-lo, eu posso ver uma propriedade chamada current do tipo input.
			E esta propriedade atual, ao expandi-la, aponta para o nó DOM real.		
		Então, pra focar no elemento de entrada no componentDidMount(), nós simplesmente chamamos o método focus na propriedade atual, desta forma (de acordo com o exemplo apresentado no código):
			this.inputRef.current.ficus
		Ao fazer isso, observaremos que no carregamento da página, o elemento tem o foco. 

Suponhamos um segundo caso de uso para usar refs:
	Buscar o valor de entrada atravé de um botão.
Segue os seguintes passos:
	Primeiro, criamos um botão com um manipulador de eventos que alertará this.input.current.value
	Basicamente, estamos acessando a propriedade value do nó DOM de entrada que está disponível com a propriedade current.

SEGUNDA abordagem:
Veremos agora refs de callback, sendo a segunda forma de definir um ref:
	É uma abordagem mais antiga, porém, é importante caso me depare com ela em algum projeto ou exemplo.
	Para este modo, focaremos no primerio caso de uso apresentado na aula.
	Esta abordagem possui 4 estapas simples:
		1ª) Criar a referência na primeira abordagem:
			Criamos uma propriedade no constructor, assim como no exemplo anterior, porém com valor nulo.
			Obs: cbRef, significa callback (apenas como forma de representação);
		
		2ª) Emobra criemos um método que atribuirá um elemento DOM à ref que acabamos de criar na etapa 1, agora, vou chamar esse método como setCbRef, 
			e vai aceitar um element DOM como seu parâmetro e atribui-lo ao callback ref para que this.cbRef seja igual ao element.
		
		3ª) Anexar este ref ao elemento de entrada (input):
			Para melhor entendimento desta aula, vou duplicar a entrada que já temos e alterar o atributo ref={} para this.setCbref. Sendo ele, o método que define nossa ref.

		O elemento input é passado implicitamente como um parãmetro que é atribuido à propriedade callback.

		4ª) No componentDidMount(), faço uma estrutura condicional onde em seu parâmetro, incluo o callback. Pois se nele, houver algum tipo de valor (motivo pelo qual inserimos null no constructor),
			será incrementado no corpo da estrutura a função de foco: this.cbref.focus()


aula_29: Refs with Class Components (Refs como Components de Classe)

Além de ser possível adicionarmos referências como a um elemento HTML normal como o input, também podemos adicionar uma referência a um componente de classe.
Vermos através de um exemplo:
Primeiro, criaremos um componente filho, chamado de Input.js. Basicamente, esse componente será uma implementação do que foi aprendido na aula passada. 
	Crio um input no render(), e um constructor, onde o this.inputRef receberá um React.createRef().
	Vou anexar esse ref criado ao input usando o atributo ref={}
	Nesta aula, não usaremos o componentDidMount(), ao invès disso, queremos criar um método que, por sua vez, focará no elemento de entrada. E este método será chamado no componente Pai.
	E este método terá em seu corpo a função de focus no elemento.
Segundo, criaremos o componente pai, chamado de FocusInput.js.
	No JSX, chamo o componente filho a existencia. E com isso também vou criar um botão.
	Agora, o que queremos fazer é...quando  clicarmos no botão, o elemento de entrada presente no componente filho deve receber o valor.
	E conseguiremos isso usando refs neste componente.
	Para reforçar, temos 3 etapas simples:
		1ª) No componente Pai, que é o componente de entrada de foco, criaremos uma referência usando o método React.createRef().
		2º) Anexamos a ref ao componente Pai.
		3º) Adicionaremos um manipulador de eventos no botão. E dentro do manipalador de cliques, chame o método do componente filho usando a ref.

Obs: Um componente de classe refs não pode ser anexado componentes funcionais.


aula_30: Forwarding Refs (Encaminhamento de Refs)

É uma técnica para passar automaticamente um ref através de um componente para um de seus fillhos.
Veremos agora o passo a passo:
	- O componente Pai cria uma referência e então a anexa à instância do componente filho.
	- O componente filho vê essa referência e diz ao Pai: "Hei! eu não sou o cara que você está procurando. Você quer o elemento de entrada nativo, certo?
		Deixe-me apresenta-lo diretamnente a você para que o componente Filho receba o ref do componente Pai e o anexe ao elemento de entrada nativo".
		Tal frase referencia o arquivo "FRInput.js", onde vemos a função de seta existente a partir do React.ForwardRef, que referencia ali um prop automatico e um ref como atributos. 
			Fazendo assim uma apresentação direta (dita no texto).
	- Agora, o componente Pai pode acessar diretamente esse elemento de entrada usando this.inputRef.current.focus()

Obs: Vale ressaltar que isso será raramente usado. Poré, n deixa de ser uma boa ideia estar ciente de conceitos diferentes de React.


aula_31: Portals (Portais)

Obs: Para melhor entendimento atualizado e explicado, analisar a documentação oficial: https://react.dev/reference/react-dom/createPortal

Os portais de React fornecem uma maneira de renderizar filhos em um nó DOM que existe fora da hierarquia DOM do componente Pai.
Para criar esse nó DOM fora da hierarquia, cria-se uma nova div com uma nova id, abaixo da div que contém o id root (localizada no index.html).
Observaremos como foi feito no arquivo "PortalDemo.js":
	- Para inserir nessa nova div, um componente por exemplo, importo: import { createPortal } from 'react-dom', chamando a existencia um portal a partir do react DOM.
	- Ao lado do return, insiro o nome da importação, createPortal, o qual recebe dois parâmetros: o primeiro, o JSX a ser renderizado, e o segundo, o local onde será teletransportado.

Mas por que precisamos dele?
	Um dos casos de uso levantados, é ter que lidar com componentes CSS aparentes quando esse componennte filho é um modal, um pop-up ou uma dica de ferramenta.
	Obs: Procurar tais exemplos em vídeos extras.


aula_32: Error Boundery (Limite de Erro)

O foco desta aula será sobre criar limites de erros através dos hooks de cliclo de vida que foram mencionados brevemente sobre a fase de tratamento de erros: static getDerivedStateFromError(error) e componentDidCatch(erro, info);
Nesta aula aprenderemos a criar uma interface que mostra com maior clareza os erros presenstes em nosso código. É aonde os limites de error ganham destaque.
Em outras palavras é que, se um componente específico lançar um erro, apenas esse componente deve retornar uma interface do usuário, e os componentes restantes não devem ser afetados. 
Exemplo usado nos códicos da aula:
	
Importante saber que nossos limites pegam erros durante a renderização nos métodos de ciclo de vida e nos constructors de toda a árvode abaixo deles, no entando, eles não pegam erros dentro dos manipuladores de eventos.
	Se eu tiver um manipulador onClick e quiser pegar um erro, eu só precisarei usar as instruções regulares do componentDidCatch() nos limites de erro. Obs: essa última frase não detemm de toda certeza, pois a tradução não ajudou;

RESUMINDO:
	- Nossos limites são componentes de React que detectam erros JavaScript em sua árvore de componentes filhos, registram esses erros e exibem uma inteface do usuário de fallback.
	- Um componente de classe se torna um limite de erro definindo um ou ambos getDerivedStateFromError() e componentDidCatch() métodos de ciclo de vida.
	- Em nosso exemplo, no método de ciclo de vida, definimos o estado de error como verdadeiro, o que faz com que a interface do usuário de fallback serja renderizada.
	- O posicionamento do limite de erro também é importante, pois controla se todo o aplicativo deve ter a interface de usuário de fallback apenas para o componente que está causando o problema.
	- Os limites basicamente fornecem uma maneira de lidar com erros no código do aplicativo.


aula_33: Higher Order Component (Componente de Ordem Superior) - (part 1)

Nesta aula, entenderemos por que é necessário algo como um componente de ordem/nível superior.
Para tal entendimento, criaremos dois componentes: ClickCounter.js e HoverCounter.js.
Tais componentes utilizam a mesma funcionalidade, que é de incrementendo do state. A única diferença é que um clica e o outro passa o mouse.
Obs: Vale ressaltar que na criação do setState, usamos o prevState (aula_11). Explicação no vídeo: https://www.youtube.com/watch?v=lURUBUu7IwY.

Ao analisar os códigos, percebemos que ambos apresentam a mesma funcionalidade de contador, mas foram duplicados.
Portanto, se dez componenetes precisassem de uma funcionalidade de contador, não seria viável duplica-los. Teríamos que reutiliza-los.
	O pensamento imediato para tal seria elevar esse estado para o componente pai e passar o manipulador como um prop.

PORÉM, caso os componenetes do contador estajam espalhados na árvore do componente React, precisaremos de compartilhar funcionalidades comuns entre os componenentes sem repetir o código.
E é aonde o conceito de componente de ordem superiror entra nas próximas duas aulas.


aula_34: Higher Order Component (Componente de Ordem Superior) - (part 2)

Obs: Esta funcionalidade não é comumente usada na nova atualização do React

Nesta aula veremos o que é componente de ordem/nível superior - HOC.
É uma função que aceita o componente original e retorna um novo componente em código simples.
Terá um aspecto semelhante a isto:
	const NewComponent = higherOrderComponent( originalComponent )
	De uma forma menos tecnica: const IronMan = withSuit (TonyStark)
Levando para a prática, a representação fica mais abrangente:
	const newComponent = OriginalComponent => {
		class newComponent extends React.Component {
			render() {
				return <OriginalComponent />
			}
			return newComponent
		}
	}

	export default newComponent

Porém, repare que no arquivo withCounter.js, de forma mais tecnica e visivel em muitos documentos e projetos, é assim que ele é mostrado. 
Obs: Repare nos componentes em que esse componente superiror é compartilhado: ClickCounter.js e HoverCounter.js
		Veja que em seus respectivos export, ambos apresentam o nome do component superior e entre seu parenteses o nome dos seus respectivos export.

Pare entender melhor como funciona, acesse: https://pt-br.legacy.reactjs.org/docs/higher-order-components.html


aula_35: Higher Order Components (Componentes de Ordem Superior) - (part 3)

Obs: Higher Order Components - HOC

Estudaremos dois tópicos importantes:
	1º) Passando props no componente do aplicativo:
		Observe que passar props no componente do app.js (linha 9) não funciona quando o componente em questão usa funcionalidades de um componente superior.
		Para que a passagem de props funcione, se faz necessária incluir um -> {... this.props.(nomeDaProps)} (linha 22 do arquivo withCounter.js).
		Isso "diz" que é para o componente superior renderizar todos os props a mais, além dos já renderizados por ele.
	
	2º) Passando parâmetros para a função HOC:
		Observando os códigos, digamos que ao invés de incrementar o valor de contagem e um, eu quero incrementa-lo em números diferentes para ambos os componentes do contador.
		Podemos fazer isso passando um parâmetro para a função de seta presente no componente superior, além do WrapperComponente (linha 4). Crio então um parâmetro chamado incrementNumber.
		Feito isso, alteramos a contagem em + 1, presente no return, e passamos a incrementar o + incrementNumber.
		E por fim, adicionaremos dentro do withCounter() presente no export dos respectivos ClickCounter.js e HoverCounter.js, o quantitativo de incrementos desejado.


aula_36: Render Props - (part 1)

Este é outro padrão para compartilhar código entre componentes de React, que é a renderização adequada.

Nesta aula, analizaremos por que há necessidade de renderizar props.
Veja que ao os componentes ClickCounterTwo.js e HoverFocusTwo.js apresnetamas mesmas funcionalidades. A única diferença é que um recebe o onlClik() e o outro onMouseOver() no JSX.
Para não ficar repetitivo, usamos o padrão Render Props, que será explicado nas próximas partes.


aula_37: Render Props - (part 2)

O termo "render props"(props de renderização) refere-se a uma tecnica para compartilhar códigos entre componentes de React usando um props cujo valor é uma função.

Nessta aula, serão apresentadas duas etapas para esta definição, compartilhando código e prop, cujo valor é uma função.
Segue abaixo o padrão para a criação de um render props:
	- No componente App.js, nos deparamos com o componente CounterRender. Neste componente, temos um estado de contagem e método de contagem de incremento.
		No entanto, este componente não renderiza nada por conta própria. Ele simplesmente renderiza o que for passado como render prop. 
		E enquanto ele faz isto, ele passa o estado de contágem e o método de contagem de incremento como argumentos;
	- O que é um prop de renderização?
		É o <ClickCounterTwo /> e <HoverCounterTwo /> sendo influenciados pelo count e o incrementCount passados como parâmetros na função de seta, os quais são passados tabém como props para o <ClickCounterTwo /> ou <HoverCounterTwo />
	- Dentro de ambos os componentes, <ClickCounterTwo /> e <HoverCounterTwo />, deve-se informar as props, fazendo uma desestruturaçao(visto a algumas aulas atrás) dos mesmos para renderizar a interface do usuário real.
	- Quando voçê clica no botão e chama o método de contágem de incremento ou tenta exibir o valor de contagem, é basicamnete o que o componente contador forneceu. 