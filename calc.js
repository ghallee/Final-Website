var divs = document.querySelectorAll('div.button')
for(var i=0;i < divs.length; i++) {
  divs[i].addEventListener('click', mathify);
}

var output = document.querySelector('#display')

function mathify(){
  switch(this.innerHTML) {
    case '=':
      if(output.innerHTML !== '') {
        output.innerHTML = math.eval(output.innerHTML);
      }
      break;
      case 'Clear':
        output.innerHTML = '';
        break;
        case 'Backspace':
          output.innerHTML = output.innerHTML.substring(0, output.innerHTML.length - 1);
          break;
          case 'Sin':
            output.innerHTML = 'sin(' + output.innerHTML + ')';
            break;
            case 'Sqrt':
              output.innerHTML = 'sqrt(' + output.innerHTML + ')';
              break;
              default:
                output.innerHTML += this.innerHTML;
              }
            }

            function add(val) {
              output.innerHTML += val
            }

            document.onkeypress = function(e) {
              switch(e.keyCode) {
                case 49:
                  add('1');
                  break;
                  case 50:
                    add('2');
                    break;
                    case 51:
                      add('3');
                      break;
                      case 52:
                        add('4');
                        break;
                        case 53:
                          add('5');
                          break;
                          case 54:
                            add('6');
                            break;
                            case 55:
                              add('7');
                              break;
                              case 56:
                                add('8');
                                break;
                                case 57:
                                  add('9');
                                  break;
                                  case 48:
                                    add('0');
                                    break;
                                    case 46:
                                      add('.');
                                      break;
                                      case 43:
                                        add('+');
                                        break;
                                        case 45:
                                          add('-');
                                          break;
                                          case 42:
                                            add('*');
                                            break;
                                            case 47:
                                              add('/');
                                              break;
                                              case 99:
                                                output.innerHTML = '';
                                                break;
                                                case 13:
                                                  if(output.innerHTML !== '') {
                                                    output.innerHTML = math.eval(output.innerHTML);
                                                  }
                                                  break;
                                                  case 40:
                                                    add('(');
                                                    break;
                                                    case 41:
                                                      add(')');
                                                      break;
                                                      case 94:
                                                        add('^');
                                                        break;
                                                      }
                                                    }

                                                    document.onkeydown = function(e) {
                                                      if(e.keyCode === 8) {
                                                        e.preventDefault();
                                                        output.innerHTML = output.innerHTML.substring(0, output.innerHTML.length - 1);
                                                      }
                                                    }
