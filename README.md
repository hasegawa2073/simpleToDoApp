# ToDoアプリ(PWA)

## 概要
ドラッグでタスクを並べ替えられるToDoアプリ(PWA化済み)

## 機能
- **タスクを並べ替える機能**
- 追加する機能 
- 削除する機能、削除するの取り消す機能(一定時間以内)
- 編集する機能

## 制作の背景
TypeScriptを触り始めたので小さなアウトプットをしてみようと思ったのがきっかけ。<br>
今まで、ToDoリストを書き出したはいいものの、見た目の順番が気になってしまうことがあった。<br>
ドラッグでサッと直感的にリストを並べ替えられるToDoアプリだったら素敵だなと思い、制作に取り組んだ。

## 使用技術
- HTML
- SCSS(CSS)
- TypeScript(JavaScript)

## モジュール分割
- リストを追加する(AddList)
- リストにフォーカスを当てる(FocusList)
- リストを配置する(ArrangeList)
- リストを掴む(GrabList)
- リストを並べ替える(SortList)
- タスクを完了する(DoneList)
- リストを削除する(RemoveList)
- 中身が空のリストは削除する(RemoveEmptyList)
- リスト追加時にリストの位置までスクロールする(ScrollToBottom)
- ローカルストレージからアイテムを取得する(GetItem)
- ローカルストレージからアイテムをクリアする(ClearItem)
- ローカルストレージにアイテムをセットする(SetItem)
- 追加ボタンのインタラクション(InteractionAddButton)
- DOMの順番をリストの見た目の順番と揃える(SortDOMTopOrder)




