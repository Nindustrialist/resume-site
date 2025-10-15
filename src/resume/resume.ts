import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'resume',
  imports: [RouterOutlet],
  templateUrl: './resume.html',
  styleUrl: './resume.scss',
})
export class Resume {
  protected readonly loremIpsumText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec egestas ex. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec non ornare elit, at ornare nibh. Donec pulvinar eros mi. Donec sit amet lacus arcu. Proin et dui eros. Cras et odio dignissim, maximus dui vitae, scelerisque nunc. Fusce viverra nulla eget placerat finibus. Integer at efficitur quam. Pellentesque lobortis ipsum elit, convallis scelerisque nisl pretium sit amet. Nunc egestas ornare libero, et consequat nisl suscipit sodales. Fusce cursus mollis nisi, eget rhoncus mauris luctus ac.

Nam eget felis et justo volutpat dictum. Nulla eleifend iaculis turpis non volutpat. Vivamus efficitur in urna quis egestas. Aliquam vulputate, nisi in facilisis sagittis, arcu nisi malesuada ante, quis dapibus ipsum augue sit amet turpis. Fusce ultricies lacus at fringilla mattis. Integer quis molestie odio, non congue tortor. Nam semper quam sed arcu elementum venenatis. Aenean eu congue turpis, sit amet volutpat erat. In orci nibh, luctus in quam vel, luctus condimentum nisl. Aliquam velit lectus, commodo eu felis id, molestie molestie urna. Donec at ante enim. Mauris quis sagittis felis. Ut vel nisi accumsan, eleifend erat eget, ultricies ex. Morbi euismod ante ac neque imperdiet vestibulum. Ut placerat fringilla cursus.

Phasellus rutrum mauris aliquam quam vulputate fermentum. Pellentesque sit amet viverra ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In non eros a elit blandit feugiat. Fusce ut mi id sapien vulputate varius. Cras sit amet accumsan nunc. Nam tincidunt mauris eget dictum consectetur. Phasellus sagittis at mi vel laoreet. Aliquam quis erat eu tellus tincidunt commodo id sit amet lectus. Pellentesque a faucibus sapien. Fusce tincidunt sagittis malesuada. Sed tincidunt egestas velit in pellentesque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas auctor molestie velit eget consequat. Praesent pellentesque magna est, et tristique ante efficitur ut. Nunc lorem tellus, tempus id massa ut, vestibulum cursus augue.

Quisque at arcu a turpis euismod commodo. Nam placerat malesuada urna, vel efficitur odio mollis ut. Pellentesque lorem tortor, consequat at erat et, tempus ullamcorper urna. Vivamus semper suscipit tellus, tempor consectetur ipsum posuere in. In luctus vulputate tellus, ut porttitor odio. Fusce efficitur tortor libero, euismod fringilla lorem mattis at. Suspendisse diam sapien, aliquam vitae sem quis, facilisis ultricies tortor. Sed faucibus ex malesuada sagittis vestibulum.

Praesent sodales ornare mauris accumsan volutpat. Nam volutpat sem suscipit eros aliquam, ac luctus ligula posuere. Curabitur vulputate, mauris quis euismod iaculis, metus neque commodo diam, in rhoncus diam dolor et elit. Nulla molestie arcu ut erat placerat pellentesque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis tristique nibh sit amet molestie porta. In id tellus vel risus finibus feugiat.`;
}
