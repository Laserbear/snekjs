# snekjs
![alt tag](https://raw.githubusercontent.com/laserbear/snekjs/master/icon.png)

A convolutional neural network trained to play the browser game slither.io. It works by iteratively approximating a reward function Q(s,a) that given a state s and action a returns the maximum value of that action in that state. The training sequence is of the form s[t],a[t],r[t],s[t+1],a[t+1],r[t+1],s[t+2],a[t+2],r[t+2],s[t+3]... and so on. Note that t represents time as certain actions may have different benefits based on the actions that prefaced them. More about the details of q learning or reinforcement learning can be found here: https://webdocs.cs.ualberta.ca/~sutton/papers/TS-icml05.pdf

### Running SnekJS

Clone this repository and load it into chrome as an unpacked extension

## Authors

* **Christian Ng** 
* **Artur Kashperskiy**
* **Ryan Ozawa**

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Acknowledgments

* Slither.io
* Andrej Karpathy for making his RL library open source

